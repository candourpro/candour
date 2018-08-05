import _ from 'lodash'
import modifierStyles from './modifierStyles'

const pickStyleProps = (styles) => _.omitBy(styles, _.isObject)

export default (theme, props, candourName, candourBase) => {
  return _.flatten([
    pickStyleProps(_.get(theme, [candourName, candourBase], {})),
    modifierStyles(_.get(theme, candourName, {}), props),
    props.style,
  ])
}
