export const NavbarVariants = {
  initial: {
    opacity: 0,
    y: '-20%'
  },
  animate: {
    opacity: 1,
    y: '0%',
    transition: {
      duration: 0.5,
      staggerChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    y: '-20%'
  }
}

export const ListVariants = {
  initial: {
    opacity: 0,
    y: '-20%'
  },
  animate: {
    opacity: 1,
    y: '0%',
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    y: '-20%'
  }
}

export const headerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2
    }
  }
}

export const headerDesc = {
  initial: {
    opacity: 0,
    x: '-100%'
  },
  animate: {
    opacity: 1,
    x: '0%',
    transition: {
      duration: 0.5,
      staggerChildren: 0.15
    }
  }
}

export const eachText = {
  initial: {
    opacity: 0,
    x: '-100%'
  },
  animate: {
    opacity: 1,
    x: '0%',
    transition: {
      type: 'tween'
    }
  }
}

export const featuresText = {
  initial: {
    opacity: 0,
    scale: 0
  },
  animate: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.6,
      staggerChildren: 0.3
    }
  },
  exit: {
    opacity: 0,
    scale: 0
  }
}

export const animateCards = {
  initial: {
    opacity: 0,
    scale: 0
  },
  animate: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.8
    }
  }
}

export const animateFaq = {
  initial: {
    opacity: 0,
    y: -20
  },
  animate: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8
    }
  }
}
