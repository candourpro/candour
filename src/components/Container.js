import React from 'react'
import Radium from 'radium'
import _ from 'lodash'

import { CandourConsumer } from '../index';
import style from '../helpers/style'
import ensureRadium from '../helpers/ensureRadium'
import childrenProps from '../helpers/childrenProps'

export default Radium(({
  children,
  candourLevel = 4,
  component = 'div',
  candourName = 'container',
  ...rest,
}) => {
  const Tag = ensureRadium(component)

  return (
    <CandourConsumer>
      {theme => {
        const styles = style(theme, rest, candourName, candourLevel)

        return (
          <Tag
            {...childrenProps(rest, Tag, styles)}
            style={styles}
          >
            {children}
          </Tag>
        )
      }}
    </CandourConsumer>
  )
})
