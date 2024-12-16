import { useEffect, useState } from 'react';
import { MemberAddress } from '@/Members';

const STORAGE_KEY = 'btc-address-tags';
const CANDIDATES_KEY = 'candidates-tags';

interface CandidateTagsMap {
  [index: number]: string;
}

export function useAddressTag(address: MemberAddress, index?: number) {
  const [tag, setTag] = useState<string>('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (address === 'candidate' || address === 'eligible candidate') {
      if (typeof index !== 'number') {
        console.warn('Index is required for candidate tags');
        return;
      }
      // For candidates, use the candidates storage
      const candidatesTags: CandidateTagsMap = JSON.parse(localStorage.getItem(CANDIDATES_KEY) || '{}');
      if (candidatesTags[index]) {
        setTag(candidatesTags[index]);
      }
      console.log("candidatesTags", candidatesTags);
    } else {
      // For bitcoin addresses, use the address storage
      const tags = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      if (tags[address]) {
        setTag(tags[address]);
      }
    }
  }, [address, index]);

  const saveTag = (newTag: string) => {
    if (address === 'candidate' || address === 'eligible candidate') {
      if (typeof index !== 'number') {
        console.warn('Index is required for candidate tags');
        return;
      }
      // Handle candidates storage
      const candidatesTags: CandidateTagsMap = JSON.parse(localStorage.getItem(CANDIDATES_KEY) || '{}');
      if (newTag.trim()) {
        candidatesTags[index] = newTag.trim();
        localStorage.setItem(CANDIDATES_KEY, JSON.stringify(candidatesTags));
        setTag(newTag.trim());
      } else {
        delete candidatesTags[index];
        localStorage.setItem(CANDIDATES_KEY, JSON.stringify(candidatesTags));
        setTag('');
      }
    } else {
      // Handle bitcoin address storage
      const tags = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      if (newTag.trim()) {
        tags[address] = newTag.trim();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tags));
        setTag(newTag.trim());
      } else {
        delete tags[address];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tags));
        setTag('');
      }
    }
    setIsEditing(false);
  };

  return { tag, isEditing, setIsEditing, saveTag };
} 