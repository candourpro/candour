import React, { Component } from 'react'
import Container from './Container'

export default ({
  component = 'button',
  primitiveType = 'button',
  ...rest,
}) => (
  <Container
    {...rest}
    component={component}
    primitiveType={primitiveType}
  />
)
