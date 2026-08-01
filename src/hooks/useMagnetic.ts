import { useEffect, useRef } from 'react';

export function useMagnetic<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches === false) return;
    const el = ref.current;
    if (!el) return;

    const existing = el.style.transition;
    el.style.transition = existing ? `${existing}, transform .25s ease` : 'transform .25s ease';

    function onMove(e: MouseEvent) {
      const r = el!.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el!.style.transform = `translate(${x * 0.18}px,${y * 0.28}px)`;
    }
    function onLeave() {
      el!.style.transform = 'translate(0,0)';
    }

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return ref;
}
