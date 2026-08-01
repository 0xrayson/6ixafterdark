import { motion, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Reveal } from './Reveal';
import { useHeroRotator } from '../hooks/useHeroRotator';
import { useHeroNumeralParallax } from '../hooks/useParallax';

const ROTATOR_WORDS = ['Brand Stories', 'Short-Form', 'Motion Direction'] as const;
const EASE = [0.16, 0.84, 0.44, 1] as const;
const titleVariants: Variants = {
  hidden: { y: '105%' },
  visible: { y: '0%' },
};

export function Hero() {
  const activeIndex = useHeroRotator(ROTATOR_WORDS);
  const numeralY = useHeroNumeralParallax();
  const reduce = useReducedMotion();

  return (
    <section className="hero">
      <motion.div className="hero-numeral" style={reduce ? undefined : { y: numeralY }}>
        06
      </motion.div>
      <div className="wrap">
        <Reveal className="eyebrow" delay={0}>
          <span className="rec" />
          (Est. 2026 / Version 1.0)
        </Reveal>

        <motion.div
          className="hero-title-mask"
          initial={reduce ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
        >
          <motion.h1 variants={titleVariants} transition={{ duration: 1, delay: 0.1, ease: EASE }}>
            WE MAKE THE CUT <span className="redline">NO ONE SCROLLS PAST.</span>
          </motion.h1>
        </motion.div>

        <Reveal className="hero-sub" delay={0.25}>
          <p>
            6ix Afterdark is the editing house of Temitope Sonaike: brand stories and
            short-form work built frame by frame, in the hours after everyone else has
            logged off.
          </p>
          <div className="name-tag">
            TEMITOPE SONAIKE
            <br />
            <b>Director / Editor</b>
            <br />
            6ix Afterdark
          </div>
        </Reveal>

        <Reveal className="hero-rotator-row" delay={0.4}>
          <span>/</span>
          <div className="hero-rotator">
            {ROTATOR_WORDS.map((word, i) => (
              <span key={word} className={i === activeIndex ? 'active' : ''}>
                {word}
              </span>
            ))}
          </div>
          <span>/</span>
        </Reveal>
      </div>
    </section>
  );
}
