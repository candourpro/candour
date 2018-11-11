import Radium from 'radium'
import isHtmlElement from './isHtmlElement'

export default (component) => {
  if (isHtmlElement(component)) return component

  return Radium(component)
}
