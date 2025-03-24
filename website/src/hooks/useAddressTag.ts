import { useEffect, useState } from 'react';
import type { MemberAddress } from '@/data';
import { isValidBitcoinAddress } from '@/types';

const STORAGE_KEY = 'btc-address-tags';
const CANDIDATES_KEY = 'candidates-tags';

interface CandidateTagsMap {
  [index: number]: string;
}

export function useAddressTag(id: MemberAddress | number) {
  const [tag, setTag] = useState<string>('');
  const [isEditing, setIsEditing] = useState(false);

  const isCandidate = typeof id === 'number';
  const isAddress = !isCandidate && typeof id === 'string' && isValidBitcoinAddress(id);

  useEffect(() => {
    if (isCandidate) {
      // For candidates, use the candidates storage
      const candidatesTags: CandidateTagsMap = JSON.parse(localStorage.getItem(CANDIDATES_KEY) || '{}');
      if (candidatesTags[id as number]) {
        setTag(candidatesTags[id as number]);
      }
    } else {
      // For bitcoin addresses, use the address storage
      const tags = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      if (tags[id]) {
        setTag(tags[id]);
      }
    }
  }, [id, isCandidate]);

  const saveTagToStorage = (storageKey: string, id: MemberAddress | number, newTag: string) => {
    const storage = JSON.parse(localStorage.getItem(storageKey) || '{}');
    if (newTag.trim()) {
      storage[id] = newTag.trim();
      setTag(newTag.trim());
    } else {
      delete storage[id];
      setTag('');
    }
    localStorage.setItem(storageKey, JSON.stringify(storage));
  };

  const saveTag = (newTag: string) => {
    if (isCandidate) {
      saveTagToStorage(CANDIDATES_KEY, id as number, newTag);
    } else {
      saveTagToStorage(STORAGE_KEY, id, newTag);
    }
    setIsEditing(false);
  };

  return { tag, isEditing, setIsEditing, saveTag, isAddress };
} 