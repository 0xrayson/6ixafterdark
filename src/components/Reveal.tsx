import { forwardRef, useRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';

type Tag = 'div' | 'section' | 'span' | 'a' | 'h2';

const MOTION_TAG: Record<Tag, React.ElementType> = {
  div: motion.div,
  section: motion.section,
  span: motion.span,
  a: motion.a,
  h2: motion.h2,
};

const EASE = [0.16, 0.84, 0.44, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: Tag;
  href?: string;
  target?: string;
  rel?: string;
  /** Extra entrance delay in seconds, for hand-staggered sequences. */
  delay?: number;
  /** Replay the animation every time the element crosses the viewport. */
  once?: boolean;
  /** Use the slightly heavier card variant (adds a subtle scale-in). */
  scale?: boolean;
  children: ReactNode;
}

export const Reveal = forwardRef<HTMLElement, RevealProps>(function Reveal(
  { as = 'div', className = '', children, delay = 0, once = false, scale = false, ...rest },
  forwardedRef,
) {
  const localRef = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const MotionTag = MOTION_TAG[as];

  function setRefs(node: HTMLElement | null) {
    localRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
  }

  if (reduce) {
    const Tag = as as React.ElementType;
    return (
      <Tag ref={setRefs} className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      ref={setRefs}
      className={className}
      variants={scale ? cardVariants : variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2, margin: '-60px' }}
      transition={{ duration: 0.75, delay, ease: EASE }}
      onViewportEnter={() => localRef.current?.classList.add('in')}
      onViewportLeave={() => {
        if (!once) localRef.current?.classList.remove('in');
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
});
