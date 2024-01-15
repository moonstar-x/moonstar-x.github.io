export type Origin = 'top' | 'right' | 'bottom' | 'left';

export type Animation = {
  initial: {
    x: number
    y: number
    opacity: number
  }
  animate: {
    x: number
    y: number
    opacity: number
  }
  transition: {
    ease: 'easeInOut'
    duration: number
  }
};

type Coordinates = {
  x: number
  y: number
};
type TransitionCoordinates = [Coordinates, Coordinates];
const resolveTransitionCoordinates = (origin: Origin, distance: number): TransitionCoordinates => {
  switch (origin) {
    case 'top':
      return [{ x: 0, y: -distance }, { x: 0, y: 0 }];
    case 'right':
      return [{ x: distance, y: 0 }, { x: 0, y: 0 }];
    case 'bottom':
      return [{ x: 0, y: distance }, { x: 0, y: 0 }];
    case 'left':
      return [{ x: -distance, y: 0 }, { x: 0, y: 0 }];
    default:
      return [{ x: 0, y: 0 }, { x: 0, y: 0 }];
  }
};

export const resolveAnimation = (origin: Origin = 'bottom', distance: number = 50, duration: number = 0.8): Animation => {
  const [initial, animate] = resolveTransitionCoordinates(origin, Math.abs(distance));

  return {
    initial: {
      ...initial,
      opacity: 0
    },
    animate: {
      ...animate,
      opacity: 1
    },
    transition: {
      ease: 'easeInOut',
      duration
    }
  };
};
