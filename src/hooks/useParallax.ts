import { useScroll, useTransform } from 'motion/react';

export function useHeroNumeralParallax() {
  const { scrollY } = useScroll();
  return useTransform(scrollY, (y) => y * 0.12);
}
