import React from 'react'
import Container from './Container'

export default ({
  children,
  level = 6,
  candourName = 'text',
  ...rest,
}) => (
  <Container
    {...rest}
    candourName={candourName}
    candourLevel={level}
  >
    {children}
  </Container>
)
