import React from 'react'
import Radium from 'radium'
import _ from 'lodash'
import filterInvalidDOMProps from 'filter-invalid-dom-props'

import isSmall from '../theme/isSmall';
import { CandourConsumer } from '../index';
import style from '../helpers/style'

const isHtmlElement = _.isString

const childrenProps = (props, component) => {
  if (!isHtmlElement(component)) {
    return _.pick(props, _.keys(component.propTypes).concat('onMouseEnter', 'onMouseLeave'))
  }

  return filterInvalidDOMProps(props)
}

export default Radium(({
  children,
  component = 'div',
  candourName = 'container',
  candourBase = 'base',
  ...rest,
}) => {
  const Tag = component

  return (
    <CandourConsumer>
      {theme => (
        <Tag
          {...childrenProps(rest, Tag)}
          style={style(theme, rest, candourName, candourBase)}
        >
          {children}
        </Tag>
      )}
    </CandourConsumer>
  )
})
