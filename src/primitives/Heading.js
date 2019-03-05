import React from 'react'
import Container from './Container'
import levelFromProps from '../lib/levelFromProps'

export default ({
  component = 'h1',
  primitiveType = 'heading',
  ...rest,
}) => {
  const level = levelFromProps(rest) || 1

  return (
    <Container
      {...rest}
      component={component}
      primitiveType={primitiveType}
      level={level}
    />
  )
}
