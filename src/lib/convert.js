import _ from 'lodash'
import traverse from 'traverse'

export default (config, styles) => {
  const result = _.cloneDeep(styles)

  traverse(result).forEach(function(value) {
    if (this.notLeaf) return

    const that = this

    _.each(config.converters, (converter) => {
      if (!converter.match(config, value, that.key)) return

      that.update(converter.value(config, value, that.key))
      return false
    })
  })

  return result
}
