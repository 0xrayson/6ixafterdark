import { Reveal } from './Reveal';

const OFFERINGS = [
  {
    num: '01',
    title: 'Brand Stories',
    body: "A brand film has one job: make someone feel something before they've read a word of copy. Every story out of 6ix Afterdark is built shot-first and sound-second, because that's the order people actually experience it in.",
  },
  {
    num: '02',
    title: 'Short-Form',
    body: "The feed doesn't care about budget. It cares about the first second. Every short-form edit is cut to survive a thumb moving fast: clean, deliberate, and built to be watched all the way through, not scrolled past.",
  },
  {
    num: '03',
    title: 'Storytelling',
    body: "Footage is not a story until something is withheld and something is paid off. Every edit out of 6ix Afterdark is built around that shape: a question raised early, held just long enough, and answered on purpose, not just cut in the order it was shot.",
  },
];

export function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="tag">// What We Do</span>
            <h2>
              Built with
              <br />
              intent.
            </h2>
          </div>
          <p className="note">
            Three disciplines, one standard. Nothing leaves the timeline until it earns
            the watch.
          </p>
        </Reveal>

        <div className="offerings">
          {OFFERINGS.map((offer, i) => (
            <Reveal as="div" className="offer" key={offer.num} delay={i * 0.1} scale>
              <span className="num">{offer.num}</span>
              <h3>{offer.title}</h3>
              <p>{offer.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
