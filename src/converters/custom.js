import _ from 'lodash'

export default {
  match: ({ custom }, value) => (
    custom && value && _.has(custom, value)
  ),
  value: ({ custom }, value) => custom[value],
}
