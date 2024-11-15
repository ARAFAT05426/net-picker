import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
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

  return {
    value,
    setValue: setStoredValue,
    removeValue: removeStoredValue,
  };
}

export default useLocalStorage;
