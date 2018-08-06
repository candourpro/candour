import React, { Component } from 'react'
import Container from './Container'

export default ({ children, candourName = 'button', ...rest }) => (
  <Container
    {...rest}
    component='button'
    candourName={candourName}
  >
    {children}
  </Container>
)
