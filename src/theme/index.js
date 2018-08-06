import fluid from '@candour/fluid'
import step from '@candour/step'
import colors from './colors'
import borderRadius from './borderRadius'
import borders from './borders'

export default {
  heading: {
    1: {
      fontSize: fluid(40, 140),
      lineHeight: fluid(60, 150),
    },
    2: {
      fontSize: fluid(35, 50),
      lineHeight: fluid(40, 55),
    },
    3: {
      fontSize: fluid(24, 30),
      lineHeight: fluid(28, 34),
    },
    4: {
      fontSize: fluid(20, 24),
      lineHeight: fluid(23, 33),
    },
  },
  text: {
    1: {
      fontSize: fluid(15, 16),
      lineHeight: fluid(17, 18),

      tight: {
        lineHeight: fluid(15, 16),
      }
    },
    2: {
      fontSize: fluid(18, 22),
      lineHeight: fluid(26, 36),

      tight: {
        lineHeight: fluid(18, 22),
      },
    },
    3: {
      fontSize: fluid(20, 39),
      lineHeight: fluid(25, 44),

      tight: {
        lineHeight: fluid(34, 39),
      },
    },
  },
  input: {
    base: {
      backgroundColor: colors.halfWhite,
      outline: 0,
      border: '1px solid transparent',
      borderRadius,
      boxShadow: 0,
      boxSizing: 'border-box',
      width: '100%',
      WebkitAppearance: 'none',
      height: fluid(50, 70),
      padding: `0 ${step()}`,

      ':focus': {
        border: borders.yellow,
      },
    },
    error: {
      border: borders.red,
    },
  },
  button: {
    base: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      height: fluid(50, 70),
      width: '100%',

      padding: `0 ${step()}`,

      fontSize: fluid(16, 18),
      letterSpacing: '.06em',
      color: colors.white,
      backgroundColor: colors.black,
      textDecoration: 'none',
      border: 0,
      borderRadius,
      cursor: 'pointer',
      transition: 'background-color 300ms',

      ':hover': {
        backgroundColor: colors.lighterBlack,
      },
    },
  },
}
