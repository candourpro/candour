import _ from 'lodash'
import traverse from 'traverse'

export default (config, styles) => (
  traverse(styles).map(function(value) {
    if (!this.isLeaf) return value

    let result = value

    _.each(config.parsers, (parser) => {
      const parsedValue = parser(config, value, this.key)
      if (parsedValue === false) return

      result = parsedValue
      return false
    })

    return result
  })
)
