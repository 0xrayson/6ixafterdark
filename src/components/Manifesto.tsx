import { motion, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Reveal } from './Reveal';

const EASE = [0.16, 0.84, 0.44, 1] as const;
const STAGGER = 0.045;

const WORDS: { text: string; accent?: boolean }[] = [
  { text: 'Good' },
  { text: 'editing' },
  { text: 'hides.' },
  { text: 'Great' },
  { text: 'editing' },
  { text: 'is' },
  { text: 'felt.' },
  { text: 'Every' },
  { text: 'cut' },
  { text: 'out' },
  { text: 'of' },
  { text: '6ix' },
  { text: 'Afterdark' },
  { text: 'is' },
  { text: 'built' },
  { text: 'on' },
  { text: 'the' },
  { text: 'belief' },
  { text: 'that' },
  { text: 'attention', accent: true },
  { text: "isn't", accent: true },
  { text: 'captured', accent: true },
  { text: 'by', accent: true },
  { text: 'accident.', accent: true },
  { text: "It's" },
  { text: 'engineered,' },
  { text: 'one' },
  { text: 'deliberate' },
  { text: 'frame' },
  { text: 'at' },
  { text: 'a' },
  { text: 'time.' },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: STAGGER } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 10, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.4, ease: EASE } },
};

export function Manifesto() {
  const reduce = useReducedMotion();

  return (
    <section className="manifesto">
      <div className="wrap">
        <Reveal as="span" className="tag">
          // Philosophy
        </Reveal>
        <motion.p
          initial={reduce ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={container}
        >
          {WORDS.map((w, i) => (
            <span key={i}>
              <motion.span
                variants={word}
                className={w.accent ? 'accent' : undefined}
                style={{ display: 'inline-block' }}
              >
                {w.text}
              </motion.span>
              {i < WORDS.length - 1 ? ' ' : ''}
            </span>
          ))}
        </motion.p>
      </div>
    </section>
  );
}
