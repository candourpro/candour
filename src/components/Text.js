import React from 'react'
import Container from './Container'

export default ({
  children,
  level = 4,
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
