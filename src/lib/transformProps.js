import _ from 'lodash'
import cssNameMatch from './cssNameMatch'
import cssProperties from 'css-properties'
import camelCaseCss from 'camelcase-css'

const shorthand = (key) => {
  if (cssNameMatch(key)) return

  let result

  _.eachRight(_.sortBy(cssProperties, 'length'), (prop) => {
    result = key.match(new RegExp(`^(${camelCaseCss(prop)})(.+)`))
    if (result) return false
  })

  return result
}

export default (props) => (
  _.reduce(props, (memo, value, key) => {
    const match = shorthand(key)

    if (match) {
      if (_.isBoolean(value)) {
        if (value) {
          memo[match[1]] = _.kebabCase(match[2])
        }
      } else {
        console.warn(`Candour: shorthand property used with a non-boolean value at ${key}.`)
      }
    } else {
      memo[key] = value
    }

    return memo
  }, {})
)
