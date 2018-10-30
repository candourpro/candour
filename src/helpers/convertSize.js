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

const SIZE_PROPS = [
  ...allSides('padding'),
  ...allSides('margin'),
  'fontSize',
  'width',
  'height',
]

export default (converter, styles) => (
  traverse(styles).map(function(value) {
    if (!this.isLeaf) return value
    if (!_.includes(SIZE_PROPS, this.key)) return value

    if (!value) return value
    if (!isNumber(value)) return value

    return converter(_.toNumber(value))
  })
)
