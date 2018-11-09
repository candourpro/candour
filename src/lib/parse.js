import _ from 'lodash'
import traverse from 'traverse'

export default (config, styles) => (
  traverse(styles).map(function(value) {
    if (!this.isLeaf) return value

    let result = value

    _.each(config.converters, (converter) => {
      const converted = converter(config, value, this.key)
      if (converted === false) return

      result = converted
      return false
    })

    return result
  })
)
