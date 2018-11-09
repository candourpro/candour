import _ from 'lodash'

export default ({ borders }, value, key) => {
  if (!borders) return false
  if (!value) return false
  if (key !== 'border') return false
  if (!_.has(borders, value)) return false

  return borders[value]
}
