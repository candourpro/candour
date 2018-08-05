import React from 'react'
import Text from './Text'

export default ({ level = 1, children, candourName = 'heading', ...rest }) => (
  <Text
    {...rest}
    component={`h${level}`}
    candourName={candourName}
    candourBase={level}
  >
    {children}
  </Text>
)
