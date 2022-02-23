export default {
  global: {
    '*': {
      '-ms-overflow-style': 'none',
      'scrollbar-width': 'none'
    },
    html: {
      fontSize: '62.5%'
    },
    body: {
      bg: '#fff',
      color: '#333',
      fontSize: '1.4rem',
      fontFamily: 'Inter, sans-serif'
    },
    a: {
      _hover: {
        textDecoration: 'none'
      }
    },
    '::-webkit-scrollbar': {
      display: 'none'
    }
  }
}
