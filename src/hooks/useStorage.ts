import { useState, useEffect } from 'react';
import { storage } from '../utils/storage';

export function useStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadValue = async () => {
      const storedValue = await storage.get<T>(key);
      if (storedValue !== null) {
        setValue(storedValue);
      }
      setLoading(false);
    };

    loadValue();
  }, [key]);

  const updateValue = async (newValue: T) => {
    setValue(newValue);
    await storage.set(key, newValue);
  };

  return { value, setValue: updateValue, loading };
}