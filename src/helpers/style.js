import _ from 'lodash'

import base from './base'
import propBase from './propBase'
import modifiers from './modifiers'

export default (theme, props, candourName, candourBase) => (
  _.flatten([
    base(theme, candourName, candourBase),
    propBase(props, _.get(theme, candourName, {})),
    propBase(props, theme),
    modifiers(props),
    props.style,
  ])
)
