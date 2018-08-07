import _ from 'lodash'
import { all as knownCssProperties } from 'known-css-properties'
import step from '@candour/step'

const fullMatch = (key) => (
  _.some(knownCssProperties, (knownProp) => _.camelCase(knownProp) === key)
)

const selectValue = (val) => {
  if (_.isNumber(val)) return step(val)
  if (_.isBoolean(val) && val) return step(1)

  return val
}

const partialMatch = (key) => (
  _.find(_.reverse(_.sortBy(knownCssProperties, 'length')), (knownProp) =>
    _.startsWith(key, _.camelCase(knownProp))
  )
)

const partialValue = (key, partial) => (
  _.kebabCase(key.replace(new RegExp(`^${_.camelCase(partial)}`), ''))
)

export default (props) => {
  return _.map(props, (val, key) => {
    if (_.isBoolean(val) && !val) return
    if (fullMatch(key)) return { [key]: selectValue(val) }

    const partial = partialMatch(key)
    if (!partial) return

    return {
      [_.camelCase(partial)]: partialValue(key, partial)
    }
  })
}
