import React, { Component } from 'react'
import Container from './Container'

export default ({
  children,
  component = 'button',
  level = 6,
  candourName = 'button',
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
