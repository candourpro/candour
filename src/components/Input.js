import React from 'react'
import Container from './Container'

export default ({
  children,
  component = 'input',
  candourName = 'input',
  ...rest,
}) => (
  <Container
    {...rest}
    component={component}
    candourName={candourName}
  >
    {children}
  </Container>
)
