import _ from 'lodash'

export default (theme, candourName, key) => (
  _.omitBy(_.get(theme, [candourName, key], {}), _.isObject)
)
