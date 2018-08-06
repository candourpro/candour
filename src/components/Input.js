import React from 'react'
import Container from './Container'

export default ({ children, candourName = 'input', ...rest }) => (
  <Container
    {...rest}
    component='input'
    candourName={candourName}
  >
    {children}
  </Container>
)
