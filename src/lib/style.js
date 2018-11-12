import _ from 'lodash'

import themeStyle from './themeStyle'
import cssNameMatch from './cssNameMatch'

export default (config, props, primitiveType, level, usedProps) => ({
  ...themeStyle(config, props, primitiveType, level, usedProps),
  ..._.pickBy(props, (value, key) => cssNameMatch(key)),
  ...props.style,
})
