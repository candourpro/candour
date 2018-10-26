import _ from 'lodash'

import base from './base'
import propBase from './propBase'
import modifiers from './modifiers'
import convertToSteps from './convertToSteps'

export default (theme, props, candourName, candourLevel) => (
  convertToSteps(
    _.flatten([
      base(theme, candourName, 'base'),
      base(theme, candourName, candourLevel),
      propBase(props, _.get(theme, candourName, {})),
      propBase(props, theme),
      modifiers(props),
      props.style,
    ])
  )
)
