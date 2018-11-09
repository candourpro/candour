import _ from 'lodash'

export default {
  match: ({ borders }, value, key) => (
    borders && value && key === 'border' && _.has(borders, value)
  ),
  value: ({ borders }, value) => borders[value],
}
