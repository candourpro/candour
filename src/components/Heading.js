import React from 'react'
import Container from './Container'

export default ({
  children,
  level = 1,
  component = level > 6 ? 'div' : `h${level}`,
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
