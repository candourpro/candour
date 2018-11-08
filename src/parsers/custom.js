import _ from 'lodash'

export default ({ theme }, value) => {
  if (!value) return false
  if (!_.has(theme, `parsers.custom.${value}`)) return false

  return theme.parsers.custom[value]
}
