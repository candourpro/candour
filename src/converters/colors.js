import _ from 'lodash'

export default ({ colors }, value, key) => {
  if (!colors) return false
  if (!value) return false
  if (!key.match(/color/i)) return false
  if (!_.has(colors, value)) return false

  return colors[value]
}
