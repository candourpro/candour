import React, { Component } from 'react'
import Container from './Container'

export default ({
  primitiveType = 'code',
  ...rest,
}) => (
  <Container
    {...rest}
    primitiveType={primitiveType}
  />
)
