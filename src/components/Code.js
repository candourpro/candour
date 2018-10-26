import React, { Component } from 'react'
import Container from './Container'

export default ({
  children,
  level = 6,
  candourName = 'code',
  candourLevel={level},
  ...rest,
}) => (
  <Container
    {...rest}
    candourName={candourName}
    candourLevel={level}
  >
    {children}
  </Container>
)
