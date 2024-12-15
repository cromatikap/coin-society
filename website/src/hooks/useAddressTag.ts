import { useEffect, useState } from 'react';
import { BitcoinAddress } from '@/types';

const STORAGE_KEY = 'btc-address-tags';

export function useAddressTag(address: BitcoinAddress) {
  const [tag, setTag] = useState<string>('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const tags = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (tags[address]) {
      setTag(tags[address]);
    }
  }, [address]);

  const saveTag = (newTag: string) => {
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
    setIsEditing(false);
  };

  return { tag, isEditing, setIsEditing, saveTag };
} 