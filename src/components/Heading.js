import React from 'react'
import Container from './Container'

export default ({
  children,
  level = 1,
  component = `h${level}`,
  candourName = 'heading',
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
