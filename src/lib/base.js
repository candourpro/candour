import _ from 'lodash'
import isNested from './isNested'

export default (theme, primitiveType, key) => (
  _.omitBy(_.get(theme, [primitiveType, key], {}), isNested)
)
