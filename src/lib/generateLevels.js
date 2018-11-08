import _ from 'lodash'

export default (fn, levelsCount = 5) => (
  _.reduce(_.range(1, levelsCount), (memo, n) => {
    memo[n] = fn(n)
    return memo
  }, {})
)
