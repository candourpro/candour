import React, { Component } from 'react'
import Container from './Container'

export default ({
  children,
  candourName = 'code',
  ...rest,
}) => (
  <Container
    {...rest}
    candourName={candourName}
  >
    {children}
  </Container>
)
