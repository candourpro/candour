import React from 'react'
import _ from 'lodash'

import { CandourConsumer } from '../index';
import style from '../lib/style'
import childrenProps from '../lib/childrenProps'
import levelFromProps from '../lib/levelFromProps'
import transformProps from '../lib/transformProps'
import convert from '../lib/convert'

export default ({
  children,
  component = 'div',
  primitiveType = 'container',
  ...rest,
}) => (
  <CandourConsumer>
    {(config) => {
      const Component = component
      const level = levelFromProps(rest) || 6
      const props = transformProps(rest)
      const usedProps = ['level']
      const styles = style(config, props, primitiveType, level, usedProps)
      const convertedStyles = convert(config, styles)

      return (
        <Component
          {...childrenProps(props, convertedStyles, usedProps)}
          style={convertedStyles}
        >
          {children}
        </Component>
      )
    }}
  </CandourConsumer>
)
