import _ from 'lodash'
import fontFamily from './fontFamily'
import levels from '../lib/levels'

const sizes = [4.5, 2.5, 2, 1.5, 1.25, 1, 0.85, 0.75, 0.65, 0.55]

export default (converters) => {
  const hasFluidStepsConverter = _.some(converters, ({ name }) => (
    name === 'fluidSteps'
  ))

  const convert = (value) => hasFluidStepsConverter ? value : `${value * 16}px`

  return ({
    container: {
      base: {
        fontFamily,
      },
      ...levels('fontSize', _.map(sizes, convert)),
    },
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
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap',
      },
    },
  })
}
