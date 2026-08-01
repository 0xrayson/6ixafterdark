import { Reveal } from './Reveal';

const LAUNCHES = [
  {
    num: '01',
    title: 'Product Drops',
    body: 'A new product or feature, cut to hit inside the first three seconds and hold the room past them.',
  },
  {
    num: '02',
    title: 'Brand Reveals',
    body: 'The moment a name goes public, paced to reset the narrative, not just announce it.',
  },
  {
    num: '03',
    title: 'Campaign Rollouts',
    body: 'One launch film split into a full week of short-form, without ever losing the thread.',
  },
];

export function Launches() {
  return (
    <section id="launches">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="tag">// Launches</span>
            <h2>
              Built for
              <br />
              launch day.
            </h2>
          </div>
          <p className="note">
            One shot to land the story right. The edit is what carries it.
          </p>
        </Reveal>

        <div className="launch-grid">
          {LAUNCHES.map((launch, i) => (
            <Reveal as="div" className="launch-card" key={launch.num} delay={i * 0.1} scale>
              <span className="num mono">{launch.num}</span>
              <h3>{launch.title}</h3>
              <p>{launch.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
