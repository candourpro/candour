import _ from 'lodash'

export default (props, styles) =>
  _.map(props, (val, key) =>
    _.isPlainObject(_.get(styles, key)) ? styles[key] : null
  )
