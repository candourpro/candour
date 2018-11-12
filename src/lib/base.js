import _ from 'lodash'
import isNested from './isNested'

export default (theme, candourName, key) => (
  _.omitBy(_.get(theme, [candourName, key], {}), isNested)
)
