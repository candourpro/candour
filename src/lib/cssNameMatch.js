import _ from 'lodash'
import cssProperties from 'css-properties'
import camelCaseCss from 'camelcase-css'

export default (key) => (
  _.some(cssProperties, (prop) => camelCaseCss(prop) === key)
)
