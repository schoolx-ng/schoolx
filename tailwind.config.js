module.exports = {
  theme: {
    extend: {
      transitionProperty:{
        'width': 'width',
        'height': 'height',
        'left': 'left',
        'right': 'right',
        'top': 'top',
        'bottom': 'bottom',
        'padding': 'padding',
      },
      width:{
        'rem': 'calc(100% - 16rem)'
      }
    },
    inset: {
      '0': '0',
      'auto': 'auto',
      '1/2': '50%',
      '64': '16rem',
      '4': '4rem',
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      'rem': 'calc(100% - 4rem)'
    },
    boxShadow: {
      'default': '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
      'md': '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
      'lg': '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
      'xl': '0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, .25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, .3)',
      'outline': '0 0 0 3px rgba(66, 153, 225, 0.5)',
      'none': 'none',
      'inner' : 'inset 2px 2px 8px 0 rgba(0, 0, 0, 0.25), -3px -3px 6px 0 rgba(255, 255, 255, 0.3),inset -2px -2px 8px 0 rgba(0, 0, 0, 0.25),  3px 3px 6px 0 rgba(255, 255, 255, 0.3)'
    }
  },
  variants: {
    backgroundColor:['responsive','hover','focus','active']
  },
  plugins: [],
}
