import { useState, useEffect } from 'react';

const useScroll = (target: HTMLElement | null = null) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Define scroll event handler
    const handleScroll = () => {
      if (target) {
        setScrollY(target.scrollTop); // For a specific element
      } else {
        setScrollY(window.scrollY); // For window scroll
      }
    };

    // Attach scroll event listener
    if (target) {
      target.addEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll);
    }

    // Cleanup event listener on unmount
    return () => {
      if (target) {
        target.removeEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [target]);

  return scrollY;
};

export default useScroll;
