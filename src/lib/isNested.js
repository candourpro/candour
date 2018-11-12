import _ from 'lodash'

export default (value, key) => (
  _.isPlainObject(value) && !_.startsWith(key, ':')
)
