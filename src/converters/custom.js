import _ from 'lodash'

export default ({ custom }, value) => {
  if (!custom) return false
  if (!value) return false
  if (!_.has(custom, value)) return false

  return custom[value]
}
