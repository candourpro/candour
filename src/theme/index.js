import _ from 'lodash'
import fluid from '@candour/fluid'
import step from '@candour/step'
import colors from './colors'
import borderRadius from './borderRadius'
import borders from './borders'
import fontFamilies from './fontFamilies'
import levels from '../helpers/levels'

const sizes = [4, 2.5, 1.5, 1, 0.75, 0.5]

export default {
  heading: levels('fontSize', sizes),
  text: levels('fontSize', sizes),
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
      backgroundColor: colors.black,
      color: colors.white,
      cursor: 'pointer',
      padding: 1,
    },
    ...levels('fontSize', sizes),
  },
  code: {
    base: {
      backgroundColor: colors.almostWhite,
      padding: 1,
      fontFamily: fontFamilies.monospace,
      whiteSpace: 'pre-wrap',
    },
    ...levels('fontSize', sizes),
  },
}
