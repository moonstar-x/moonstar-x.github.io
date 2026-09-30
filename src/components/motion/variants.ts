import type { Variants } from 'framer-motion';

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const REVEAL_VIEWPORT = {
  once: true,
  amount: 0.3
} as const;

export const staggerChildren = (stagger: number, delay = 0): Variants => ({
  hidden: {},
  shown: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay
    }
  }
});

export const fadeUp = (delay = 0, distance = 24): Variants => ({
  hidden: {
    opacity: 0,
    y: distance
  },
  shown: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_OUT_EXPO,
      ...delay > 0 && { delay }
    }
  }
});

export const maskReveal: Variants = {
  hidden: {
    y: '110%'
  },
  shown: {
    y: '0%',
    transition: {
      duration: 0.9,
      ease: EASE_OUT_EXPO
    }
  }
};

export const drawLine: Variants = {
  hidden: {
    scaleX: 0
  },
  shown: {
    scaleX: 1,
    transition: {
      duration: 1.1,
      ease: EASE_OUT_EXPO
    }
  }
};

export const settleIn: Variants = {
  hidden: {
    scale: 1.08
  },
  shown: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: EASE_OUT_EXPO
    }
  }
};

export const TAP_SCALE = {
  scale: 0.97
} as const;
