import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void, () => void] {

  const storedValue = localStorage.getItem(key);
  const [value, setValue] = useState<T>(
    storedValue ? JSON.parse(storedValue) : initialValue
  );


  const setStoredValue = (newValue: T): void => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };


  const removeStoredValue = (): void => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, setStoredValue, removeStoredValue];
}

export default useLocalStorage;
