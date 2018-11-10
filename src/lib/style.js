import _ from 'lodash'

import convert from './convert'
import themeStyle from './themeStyle'
import modifiers from './modifiers'

export default (config, props, candourName, level) => (
  convert(
    config,
    _.flatten([
      ...themeStyle(config, props, candourName, level),
      modifiers(props),
      props.style,
    ]),
  )
)
