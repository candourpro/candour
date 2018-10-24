import fluid from '@candour/fluid'
import step from '@candour/step'
import colors from './colors'
import borderRadius from './borderRadius'
import borders from './borders'
import generateLevels from '../helpers/generateLevels'

export default {
  heading: generateLevels((n) => ({
    fontSize: step(3 - 0.7 * (n - 1)),
    lineHeight: 1,
  })),
  text: generateLevels((n) => ({
    fontSize: step(1 + 0.2 * (n - 1)),
    lineHeight: 1.5,
  })),
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

      width: '100%',
      height: fluid(50, 70),

      padding: `0 ${step()}`,

      fontSize: step(),
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
