import React, { Component } from 'react'
import Container from './Container'

export default ({
  children,
  component = 'button',
  candourName = 'button',
  ...rest,
}) => (
  <Container
    {...rest}
    component={component}
    candourName={candourName}
  >
    {children}
  </Container>
)
