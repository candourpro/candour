import _ from 'lodash'

export default {
  match: ({ fontFamilies }, value, key) => (
    fontFamilies && value && key === 'fontFamily' && _.has(fontFamilies, value)
  ),
  value: ({ fontFamilies }, value) => fontFamilies[value],
}
