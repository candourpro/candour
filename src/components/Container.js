import React from 'react'
import Radium from 'radium'
import _ from 'lodash'

import { CandourConsumer } from '../index';
import style from '../lib/style'
import ensureRadium from '../lib/ensureRadium'
import childrenProps from '../lib/childrenProps'
import levelFromProps from '../lib/levelFromProps'

export default Radium(({
  children,
  component = 'div',
  candourName = 'container',
  ...rest,
}) => {
  const Component = ensureRadium(component)
  const level = levelFromProps(rest) || 6

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
