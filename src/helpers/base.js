import _ from 'lodash'

export default (theme, candourName, candourBase) => (
  _.omitBy(_.get(theme, [candourName, candourBase], {}), _.isObject)
)
