import React from 'react'
import Container from './Container'

export default ({
  level = 1,
  children,
  component = `h${level}`,
  candourName = 'heading',
  ...rest,
}) => (
  <Container
    {...rest}
    component={component}
    candourName={candourName}
    candourBase={level}
  >
    {children}
  </Container>
)
