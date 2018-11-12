import React from 'react'
import Container from './Container'

export default ({
  primitiveType = 'text',
  ...rest,
}) => (
  <Container
    {...rest}
    primitiveType={primitiveType}
  />
)
