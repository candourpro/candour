import _ from 'lodash'
import fluid from '@candour/fluid'
import colors from './colors'
import borderRadius from './borderRadius'
import borders from './borders'
import fontFamilies from './fontFamilies'
import levels from '../lib/levels'

const sizes = [4.5, 2.5, 2, 1.5, 1.25, 1, 0.85, 0.75, 0.65, 0.55]

export default (parsers) => {
  const hasFluidStepsParser = _.includes(parsers, (p) => (
    p.candourParserName === 'fluidSteps'
  ))

  const convert = (value) => hasFluidStepsParser ? value : `${value * 16}px`

  return ({
    container: levels('fontSize', _.map(sizes, convert)),
    heading: levels('fontSize', _.map(sizes, convert)),
    text: levels('fontSize', _.map(sizes, convert)),
    input: {
      base: {
        border: '1px solid black',
        padding: convert(1),
      },
    },
    button: {
      base: {
        backgroundColor: 'black',
        color: 'white',
        cursor: 'pointer',
        padding: convert(1),
      },
    },
    code: {
      base: {
        padding: convert(1),
        fontFamily: fontFamilies.monospace,
        whiteSpace: 'pre-wrap',
      },
    },
  })
}
