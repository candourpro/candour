import _ from 'lodash'
import base from './base'
import propBase from './propBase'

export default ({ theme }, props, candourName, level) => ([
  base(theme, 'container', 'base'),
  base(theme, 'container', level),
  propBase(props, _.get(theme, 'container', {})),
  base(theme, candourName, 'base'),
  base(theme, candourName, level),
  propBase(props, _.get(theme, candourName, {})),
  propBase(props, theme),
])
