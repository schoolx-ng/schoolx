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
    }
  },
  variants: {
    backgroundColor:['responsive','hover','focus','active']
  },
  plugins: [],
}
