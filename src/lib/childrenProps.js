import _ from 'lodash'
import filterInvalidDOMProps from 'filter-invalid-dom-props'
import filterReactDOMProps from 'filter-react-dom-props'
import isHtmlElement from './isHtmlElement'

export default (props, component, styles) => {
  const stylesProps = _.flatMap(styles, _.keys)
  const withoutStyleProps = _.omit(props, stylesProps)

  if (!isHtmlElement(component)) {
    return {
      ...filterReactDOMProps(withoutStyleProps),
      ..._.pick(withoutStyleProps, _.keys(component.propTypes)),
    }
  }

  return filterInvalidDOMProps(withoutStyleProps)
}
