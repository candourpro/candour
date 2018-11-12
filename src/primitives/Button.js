import React, { Component } from 'react'
import Container from './Container'

export default ({
  children,
  component = 'button',
  primitiveType = 'button',
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
