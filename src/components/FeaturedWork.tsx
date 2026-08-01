import { Reveal } from './Reveal';
import { useMagnetic } from '../hooks/useMagnetic';

function CaseCta() {
  const ref = useMagnetic<HTMLAnchorElement>();
  return (
    <a
      ref={ref}
      className="case-cta"
      href="https://www.instagram.com/6ix.afterdark_"
      target="_blank"
      rel="noopener noreferrer"
    >
      Watch the full edit &rarr;
    </a>
  );
}

export function FeaturedWork() {
  return (
    <section id="work">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="tag">// Featured Work</span>
            <h2>The work.</h2>
          </div>
          <p className="note">More stories in motion, regularly, on Instagram.</p>
        </Reveal>

        <Reveal as="span" className="work-index mono">
          ( 01 / 01 )
        </Reveal>

        <Reveal className="case" scale>
          <div className="case-visual">
            <div>
              <span className="brand-eyebrow">Emporio Armani / Brand Film</span>
              <h3>
                Stronger
                <br />
                With You
              </h3>
            </div>
            <div className="frame-line" />
            <div className="monogram">AD</div>
          </div>
          <div className="case-copy">
            <p>
              A creative direction and edit built around Emporio Armani's "Stronger With
              You" fragrance: pacing, color grade and sound design directed to move like
              a campaign film, cut with the same discipline as a paid brief.
            </p>
            <div className="case-tags">
              <span>Brand Story</span>
              <span>Spec Campaign</span>
              <span>Motion Direction</span>
            </div>
            <CaseCta />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
