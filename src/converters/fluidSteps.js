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

export default {
  name: 'fluidSteps',
  match: (_config, value, key) => (
    value && isNumber(value) && _.includes(SIZE_PROPS, key)
  ),
  value: (_config, value) => step(_.toNumber(value)),
}
