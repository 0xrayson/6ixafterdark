import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Reveal } from './Reveal';
import { VideoPreview } from './VideoPreview';
import { useMagnetic } from '../hooks/useMagnetic';

const EASE = [0.16, 0.84, 0.44, 1] as const;

interface CaseStudy {
  brandEyebrow: string;
  titleLines: [string, string];
  body: string;
  tags: string[];
  reelUrl: string;
  videoSrc: string;
  poster: string;
}

const CASES: CaseStudy[] = [
  {
    brandEyebrow: 'Emporio Armani / Brand Film',
    titleLines: ['Stronger', 'With You'],
    body: "A creative direction and edit built around Emporio Armani's \"Stronger With You\" fragrance: pacing, color grade and sound design directed to move like a campaign film, cut with the same discipline as a paid brief.",
    tags: ['Brand Story', 'Spec Campaign', 'Motion Direction'],
    reelUrl: 'https://www.instagram.com/reel/DbgSfmct0_k/',
    videoSrc: '/videos/stronger-with-you.mp4',
    poster: '/videos/stronger-with-you-poster.jpg',
  },
];

function CaseCta({ href }: { href: string }) {
  const ref = useMagnetic<HTMLAnchorElement>();
  return (
    <a ref={ref} className="case-cta" href={href} target="_blank" rel="noopener noreferrer">
      Watch the full edit &rarr;
    </a>
  );
}

export function FeaturedWork() {
  const [index, setIndex] = useState(0);
  const total = CASES.length;
  const current = CASES[index];

  function prev() {
    setIndex((i) => (i - 1 + total) % total);
  }
  function next() {
    setIndex((i) => (i + 1) % total);
  }

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

        <Reveal as="div" className="case-nav">
          {total > 1 && (
            <button type="button" className="case-nav-btn" onClick={prev} aria-label="Previous work">
              &larr;
            </button>
          )}
          <span className="work-index mono">
            ( {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')} )
          </span>
          {total > 1 && (
            <button type="button" className="case-nav-btn" onClick={next} aria-label="Next work">
              &rarr;
            </button>
          )}
        </Reveal>

        <Reveal className="case" scale>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="case-grid"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <div className="case-visual">
                <div>
                  <span className="brand-eyebrow">{current.brandEyebrow}</span>
                  <h3>
                    {current.titleLines[0]}
                    <br />
                    {current.titleLines[1]}
                  </h3>
                </div>
                <VideoPreview src={current.videoSrc} poster={current.poster} />
              </div>
              <div className="case-copy">
                <p>{current.body}</p>
                <div className="case-tags">
                  {current.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <CaseCta href={current.reelUrl} />
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
