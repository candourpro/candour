import React, { Component } from 'react'
import Container from './Container'

export default ({
  children,
  primitiveType = 'code',
  ...rest,
}) => (
  <Container
    {...rest}
    primitiveType={primitiveType}
  >
    {children}
  </Container>
)
