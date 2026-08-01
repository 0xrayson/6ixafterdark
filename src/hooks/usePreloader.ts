import { useEffect, useState } from 'react';

const DURATION = 1300;

export function usePreloader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    let start: number | null = null;
    let raf = 0;
    let finished = false;
    let removeTimer: ReturnType<typeof setTimeout>;

    function finish() {
      if (finished) return;
      finished = true;
      setDone(true);
      document.body.classList.remove('locked');
      removeTimer = setTimeout(() => setMounted(false), 800);
    }

    function step(ts: number) {
      if (start === null) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / DURATION, 1);
      setPct(Math.floor(progress * 100));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        finish();
      }
    }

    raf = requestAnimationFrame(step);
    const safety = setTimeout(finish, DURATION + 600);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(safety);
      clearTimeout(removeTimer);
    };
  }, []);

  return { pct, done, mounted };
}
