import React from 'react'
import Radium from 'radium'
import _ from 'lodash'

import { CandourConsumer } from '../index';
import style from '../lib/style'
import ensureRadium from '../lib/ensureRadium'
import childrenProps from '../lib/childrenProps'
import levelFromProps from '../lib/levelFromProps'
import transformProps from '../lib/transformProps'
import convert from '../lib/convert'

export default Radium(({
  children,
  component = 'div',
  primitiveType = 'container',
  ...rest,
}) => {
  const Component = ensureRadium(component)
  const level = levelFromProps(rest) || 6

  return (
    <CandourConsumer>
      {(config) => {
        const props = transformProps(rest)
        const usedProps = []
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
})
