import _ from 'lodash'
import isNumber from 'is-number'
import step from '@candour/step'

const allSides = (name) => [
  name,
  `${name}Top`,
  `${name}Right`,
  `${name}Bottom`,
  `${name}Left`,
]

const SIZE_PROPS = [
  ...allSides('padding'),
  ...allSides('margin'),
  'fontSize',
  'width',
  'height',
  'borderWidth',
]

const fluidSteps = (_config, value, key) => {
  if (!value) return false
  if (!isNumber(value)) return false
  if (!_.includes(SIZE_PROPS, key)) return false

  return step(_.toNumber(value))
}

fluidSteps.candourConverterName = 'fluidSteps'
export default fluidSteps
