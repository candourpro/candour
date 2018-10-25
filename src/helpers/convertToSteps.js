import isNumber from 'is-number'
import _ from 'lodash'
import step from '@candour/step'
import traverse from 'traverse'

const allSides = (name) => [
  name,
  `${name}Top`,
  `${name}Right`,
  `${name}Bottom`,
  `${name}Left`,
]

const STEP_PROPS = [
  ...allSides('padding'),
  ...allSides('margin'),
  'fontSize',
  'width',
  'height',
]

export default (styles) => (
  traverse(styles).map(function(value) {
    if (!value) return value
    if (!this.isLeaf) return value
    if (!_.includes(STEP_PROPS, this.key)) return value
    if (!isNumber(value)) return value

    return step(_.toNumber(value))
  })
)
