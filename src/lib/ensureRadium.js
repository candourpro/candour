import _ from 'lodash'
import Radium from 'radium'
import isHtmlElement from './isHtmlElement'

export default (component) => {
  if (_.isString(component)) return component

  return Radium(component)
}
