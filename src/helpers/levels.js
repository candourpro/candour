import _ from 'lodash'
import step from '@candour/step'

const NON_STEP_PROPS = [
  'fontWeight',
]

const getLevelSize = (sizes, level) => (
  sizes[level - 1] || _.last(sizes)
)

export default (prop, sizes) => (
  _.reduce(_.range(1, 7), (memo, level) => ({
    ...memo,
    [level]: {
      [prop]: _.includes(NON_STEP_PROPS, prop) ? getLevelSize(sizes, level) : step(getLevelSize(sizes, level))
    },
  }), {})
)
