import { Reveal } from './Reveal';
import { useMagnetic } from '../hooks/useMagnetic';

export function Contact() {
  const btnRef = useMagnetic<HTMLElement>();

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <Reveal as="span" className="tag">
          // Get In Touch
        </Reveal>
        <Reveal as="h2">
          Make the cut
          <br />
          worth watching.
        </Reveal>
        <Reveal
          as="a"
          ref={btnRef}
          className="btn-red"
          href="https://www.instagram.com/6ix.afterdark_"
          target="_blank"
          rel="noopener noreferrer"
        >
          DM on Instagram &rarr;
        </Reveal>
        <Reveal className="contact-meta">
          <a
            href="https://www.instagram.com/6ix.afterdark_"
            target="_blank"
            rel="noopener noreferrer"
            style={{ transitionDelay: '0s' }}
          >
            Instagram: @6ix.afterdark_
          </a>
          <a href="mailto:temitopesonaike06@gmail.com" style={{ transitionDelay: '0.08s' }}>
            Email: temitopesonaike06@gmail.com
          </a>
          <span style={{ transitionDelay: '0.16s' }}>Lagos, Nigeria</span>
        </Reveal>
        <Reveal as="div" className="closing-mark">
          <span className="dot" />
          6ix Afterdark
          <sup className="mono">&reg;</sup>
        </Reveal>
      </div>
    </section>
  );
}
