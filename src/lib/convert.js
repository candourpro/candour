import _ from 'lodash'

export default (config, styles) => (
  _.reduce(styles, (memo, value, key) => {
    memo[key] = value

    _.each(config.converters, (converter) => {
      if (!converter.match(config, value, key)) return

      memo[key] = converter.value(config, value, key)
      return false
    })

    return memo
  }, {})
)
