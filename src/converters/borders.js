import _ from 'lodash'

const BORDER_PROPS = [
  'border',
  'borderTop',
  'borderRight',
  'borderBottom',
  'borderLeft',
]

export default {
  match: ({ borders }, value, key) => (
    borders && value && _.has(borders, value) && _.includes(BORDER_PROPS, key)
  ),
  value: ({ borders }, value) => borders[value],
}
