import _ from 'lodash'
import isNested from './isNested'

export default (props, styles, usedProps) => (
  _.reduce(props, (memo, val, key) => {
    if (!isNested(_.get(styles, key), key)) return memo

    usedProps.push(key)
    return {
      ...memo,
      ...styles[key],
    }
  }, {})
)
