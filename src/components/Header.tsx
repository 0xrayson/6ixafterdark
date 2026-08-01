import { useState } from 'react';
import { useMotionValueEvent, useScroll } from 'motion/react';
import { useMagnetic } from '../hooks/useMagnetic';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ctaRef = useMagnetic<HTMLAnchorElement>();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 40);
  });

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav>
        <a href="#top" className="logo">
          <span className="dot" />
          6ix Afterdark
          <sup>&reg;</sup>
        </a>
        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          <a href="#launches" onClick={closeMenu}>Launches</a>
          <span className="slash">/</span>
          <a href="#work" onClick={closeMenu}>Work</a>
          <span className="slash">/</span>
          <a href="#services" onClick={closeMenu}>Stories</a>
          <span className="slash">/</span>
          <a href="#about" onClick={closeMenu}>About</a>
        </div>
        <a
          ref={ctaRef}
          className="nav-cta"
          href="https://www.instagram.com/6ix.afterdark_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="cta-stack">
            <span>Let's Talk</span>
            <span>Let's Talk</span>
          </span>
        </a>
        <button
          className="burger"
          aria-label="Menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}
