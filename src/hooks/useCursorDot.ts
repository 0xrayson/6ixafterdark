import { useEffect } from 'react';

export function useCursorDot() {
  useEffect(() => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches === false) return;

    const dot = document.createElement('div');
    dot.id = 'cursorDot';
    document.body.appendChild(dot);

    function onMove(e: MouseEvent) {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    }
    function onOver(e: MouseEvent) {
      if ((e.target as HTMLElement).closest('a, button')) dot.classList.add('hover');
    }
    function onOut(e: MouseEvent) {
      if ((e.target as HTMLElement).closest('a, button')) dot.classList.remove('hover');
    }

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      dot.remove();
    };
  }, []);
}
