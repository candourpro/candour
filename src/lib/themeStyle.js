import _ from 'lodash'
import base from './base'
import propBase from './propBase'

export default ({ theme }, props, primitiveType, level, usedProps) => ({
  ...base(theme, 'container', 'base'),
  ...base(theme, 'container', level),
  ...propBase(props, _.get(theme, 'container', {}), usedProps),
  ...base(theme, primitiveType, 'base'),
  ...base(theme, primitiveType, level),
  ...propBase(props, _.get(theme, primitiveType, {}), usedProps),
  ...propBase(props, theme, usedProps),
})
