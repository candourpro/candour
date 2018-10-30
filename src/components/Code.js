import React, { Component } from 'react'
import Container from './Container'

export default ({
  children,
  level = 6,
  candourName = 'code',
  ...rest,
}) => (
  <Container
    {...rest}
    candourName={candourName}
    level={level}
  >
    {children}
  </Container>
)
