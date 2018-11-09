import _ from 'lodash'

export default ({ fontFamilies }, value, key) => {
  if (!fontFamilies) return false
  if (!value) return false
  if (key !== 'fontFamily') return false
  if (!_.has(fontFamilies, value)) return false

  return fontFamilies[value]
}
