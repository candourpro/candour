import React from 'react'
import Radium from 'radium'
import _ from 'lodash'

import { CandourConsumer } from '../index';
import style from '../lib/style'
import ensureRadium from '../lib/ensureRadium'
import childrenProps from '../lib/childrenProps'

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
      {(config) => {
        const styles = style(config, rest, candourName, level)

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
