import _ from 'lodash'

export default (props, styles, usedProps) => (
  _.reduce(props, (memo, val, key) => {
    if (!_.isPlainObject(_.get(styles, key))) return memo

    usedProps.push(key)
    return {
      ...memo,
      ...styles[key],
    }
  }, {})
)
