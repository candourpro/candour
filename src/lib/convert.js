import _ from 'lodash'
import traverse from 'traverse'

export default (config, styles) => (
  traverse(styles).map(function(value) {
    if (!this.isLeaf) return value

    let result = value

    _.each(config.converters, (converter) => {
      if (!converter.match(config, value, this.key)) return

      result = converter.value(config, value, this.key)
      return false
    })

    return result
  })
)
