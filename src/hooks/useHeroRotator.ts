import { useEffect, useState } from 'react';

export function useHeroRotator(words: readonly string[], interval = 2200) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return index;
}
