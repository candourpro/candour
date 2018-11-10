import React from 'react'
import Container from './Container'

export default ({
  children,
  candourName = 'text',
  ...rest,
}) => (
  <Container
    {...rest}
    candourName={candourName}
  >
    {children}
  </Container>
)
