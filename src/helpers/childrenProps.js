import _ from 'lodash'
import filterInvalidDOMProps from 'filter-invalid-dom-props'
import isHtmlElement from './isHtmlElement'

export default (props, component) => {
  if (!isHtmlElement(component)) {
    return _.pick(props, _.keys(component.propTypes).concat('onMouseEnter', 'onMouseLeave'))
  }

  return filterInvalidDOMProps(props)
}
