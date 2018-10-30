import React from 'react'
import Radium from 'radium'
import _ from 'lodash'

import { CandourConsumer } from '../index';
import style from '../helpers/style'
import ensureRadium from '../helpers/ensureRadium'
import childrenProps from '../helpers/childrenProps'

export default Radium(({
  children,
  component = 'div',
  level = 6,
  candourName = 'container',
  ...rest,
}) => {
  const Component = ensureRadium(component)

  return (
    <CandourConsumer>
      {theme => {
        const styles = style(theme, rest, candourName, level)

        return (
          <Component
            {...childrenProps(rest, Component, styles)}
            style={styles}
          >
            {children}
          </Component>
        )
      }}
    </CandourConsumer>
  )
})
