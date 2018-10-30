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
      border: borders.black,
      padding: 1,
    },
    ...levels('fontSize', sizes),
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
