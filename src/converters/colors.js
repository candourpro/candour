import _ from 'lodash'

export default {
  match: ({ colors }, value, key) => (
    colors && value && key.match(/color/i) && _.has(colors, value)
  ),
  value: ({ colors }, value) => colors[value],
}
