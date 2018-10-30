import React from 'react'
import Container from './Container'

export default ({
  children,
  component = 'input',
  level = 6,
  candourName = 'input',
  ...rest,
}) => (
  <Container
    {...rest}
    component={component}
    candourName={candourName}
    level={level}
  >
    {children}
  </Container>
)
