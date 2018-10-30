import _ from 'lodash'

const getLevelSize = (sizes, level) => (
  sizes[level - 1] || _.last(sizes)
)

export default (prop, sizes) => (
  _.reduce(_.range(1, sizes.length + 1), (memo, level) => ({
    ...memo,
    [level]: {
      [prop]: getLevelSize(sizes, level),
    },
  }), {})
)
