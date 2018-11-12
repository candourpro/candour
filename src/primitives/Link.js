import React from 'react'
import Container from './Container'

export default ({
  children,
  component = 'a',
  primitiveType = 'link',
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
