import _ from 'lodash'

export default (props, styles, usedProps) => (
  _.omit(props, _.keys(styles).concat(usedProps))
)
