import React from 'react'
import Container from './Container'

export default ({
  children,
  component = 'input',
  primitiveType = 'input',
  ...rest,
}) => (
  <Container
    {...rest}
    component={component}
    primitiveType={primitiveType}
  >
    {children}
  </Container>
)
