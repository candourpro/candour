import React from 'react'
import Container from './Container'

export default ({ level = 1, children, candourName = 'heading', ...rest }) => (
  <Container
    {...rest}
    component={`h${level}`}
    candourName={candourName}
    candourBase={level}
  >
    {children}
  </Container>
)
