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
  candourName = 'container',
  candourBase = 'base',
  ...rest,
}) => {
  const Tag = ensureRadium(component)

  return (
    <CandourConsumer>
      {theme => {
        const styles = style(theme, rest, candourName, candourBase)

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
