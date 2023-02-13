export const slideInRight = {
    initial: {
      x: '100%',
      opacity: 0,
    },
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.48, 0.15, 0.25, 0.96],
      },
    },
    exit: {
      x: '-100%',
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.48, 0.15, 0.25, 0.96],
      },
    },
  };