import _ from 'lodash'

export default (props) => {
  const key = _.findLastKey(props, (val, innerKey) => (
    val && innerKey.match(/^level(\d+)?$/)
  ))

  if (!key) return
  if (key === 'level') {
    // so it is inline with other defaults as 1
    if (props[key] === true) return 1

    return props[key]
  }

  return key.match(/^level(\d+)$/)[1]
}
