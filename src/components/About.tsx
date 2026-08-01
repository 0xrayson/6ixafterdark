import { Reveal } from './Reveal';

const META = [
  { label: 'Location', value: 'Lagos, Nigeria' },
  { label: 'Tools', value: 'DaVinci Resolve, CapCut' },
  { label: 'Focus', value: 'Brand, Short-Form, Storytelling' },
  { label: 'Founded', value: '2026' },
];

export function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="tag">// About</span>
            <h2>
              The house
              <br />
              behind the name.
            </h2>
          </div>
        </Reveal>

        <Reveal className="about-block">
          <div>
            <p>
              6ix Afterdark is built and directed by Temitope Sonaike, an editor working
              out of Lagos with an engineer's eye for detail, trained first in Computer
              Engineering, sharpened since on the timeline.
            </p>
            <p>
              The name is literal. The work happens after dark, in the hours reserved for
              the fourth pass nobody asked for: the frame trimmed by two units, the sound
              that sits half a beat early, the difference most people never consciously
              notice, but always feel.
            </p>
          </div>
          <div className="about-meta">
            {META.map((item, i) => (
              <div key={item.label} style={{ transitionDelay: `${i * 0.08}s` }}>
                <span>{item.label}</span>
                <b>{item.value}</b>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
