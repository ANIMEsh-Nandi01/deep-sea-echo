
export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      delay, 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
});

export const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      delay, 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
});

export const slideUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      delay, 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
});

export const slideRight = (delay = 0) => ({
  initial: { opacity: 0, x: -30 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      delay, 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
});

export const slideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: 30 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      delay, 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
});

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const blurIn = (delay = 0) => ({
  initial: { 
    opacity: 0, 
    filter: "blur(8px)" 
  },
  animate: { 
    opacity: 1, 
    filter: "blur(0px)",
    transition: {
      delay, 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
});
