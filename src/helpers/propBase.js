import _ from 'lodash'

export default (props, styles) => {
  const result = []

  _.each(props, (val, key) => {
    if (!_.isPlainObject(_.get(styles, key))) return

    result.push(styles[key])
  })

  return result
}
