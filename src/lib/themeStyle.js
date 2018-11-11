import _ from 'lodash'
import base from './base'
import propBase from './propBase'

export default ({ theme }, props, candourName, level, usedProps) => ({
  ...base(theme, 'container', 'base'),
  ...base(theme, 'container', level),
  ...propBase(props, _.get(theme, 'container', {}), usedProps),
  ...base(theme, candourName, 'base'),
  ...base(theme, candourName, level),
  ...propBase(props, _.get(theme, candourName, {}), usedProps),
  ...propBase(props, theme, usedProps),
})
