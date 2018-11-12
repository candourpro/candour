import React from 'react'
import Container from './Container'

export default ({
  children,
  primitiveType = 'text',
  ...rest,
}) => (
  <Container
    {...rest}
    primitiveType={primitiveType}
  >
    {children}
  </Container>
)
