export const buttonStyles = {
  baseStyle: {
    borderRadius: '0.4rem',
    cursor: 'pointer',
    transition: 'all 0.6s',
    _hover: {
      opacity: '0.8',
      transform: 'scale(1.02)'
    },
    _focus: {
      border: 'none',
      boxShadow: 'none',
      outline: 'none'
    }
  },
  sizes: {
    md: {
      fontSize: { base: '1.4rem', lg: '1.6rem' },
      fontWeight: '500',
      px: '1.35rem',
      py: '1.4rem'
    }
  },
  variants: {
    transparent: {
      bg: 'transparent'
    },
    dark: {
      bg: 'transparent'
    },
    orange: {
      bg: 'brand.orange',
      color: 'brand.white',
      _hover: {
        _disabled: {
          bg: 'brand.orange'
        }
      }
    }
  }
}
