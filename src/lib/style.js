import _ from 'lodash'

import base from './base'
import propBase from './propBase'
import modifiers from './modifiers'
import parse from './parse'

export default (config, props, candourName, level) => {
  const { theme } = config

  return parse(
    config,
    _.flatten([
      base(theme, 'container', 'base'),
      base(theme, 'container', level),
      propBase(props, _.get(theme, 'container', {})),
      base(theme, candourName, 'base'),
      base(theme, candourName, level),
      propBase(props, _.get(theme, candourName, {})),
      propBase(props, theme),
      modifiers(props),
      props.style,
    ]),
  )
}
