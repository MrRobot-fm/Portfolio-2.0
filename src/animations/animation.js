export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3
    }
  }
};

export const item = {
  hidden: {
    opacity: 0,
    x: '100%',
    rotateX: '180deg'
  },
  show: {
    opacity: 1,
    x: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: 'easeIn' }
  }
};

export const container2 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1.8,
      staggerChildren: 0.2
    }
  }
};

export const item2 = {
  hidden: {
    opacity: 0,
    y: '100%'
  },
  show: {
    opacity: 1,
    y: 0,

    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

export const item3 = {
  hidden: {
    opacity: 0,
    y: '100%',
    rotateX: '180deg'
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,

    transition: { duration: 0.1, ease: 'easeIn' }
  }
};

export const item4 = {
  hidden: {
    opacity: 0,
    x: '100%'
  },
  show: {
    opacity: 1,
    x: 0,

    transition: { duration: 1, ease: 'easeIn' }
  }
};

export const item5 = {
  hidden: {
    opacity: 0,
    x: '-50%'
  },
  show: {
    opacity: 1,
    x: 0,

    transition: { duration: 0.5, ease: 'easeIn' }
  }
};

export const item6 = {
  hidden: {
    opacity: 0,
    rotateX: '180deg'
  },
  show: {
    opacity: 1,
    rotateX: 0,

    transition: { duration: 0.8, ease: 'easeIn' }
  }
};

export const item7 = {
  hidden: {
    opacity: 0,
    y: '100px'
  },
  show: {
    opacity: 1,
    y: 0,

    transition: { duration: 1, ease: 'easeIn' }
  }
};
