import _ from 'lodash'

export default (styles, props) => {
  const result = []

  _.each(props, (val, key) => {
    if (!_.isPlainObject(_.get(styles, key))) return

    result.push(styles[key])
  })

  return result
}
