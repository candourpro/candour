import React from 'react'
import Container from './Container'
import levelFromProps from '../lib/levelFromProps'

export default ({
  component: componentProp,
  primitiveType = 'heading',
  ...rest,
}) => {
  const level = levelFromProps(rest) || 1
  const component = componentProp || level > 6 ? 'div' : `h${level}`

  return (
    <Container
      {...rest}
      component={component}
      primitiveType={primitiveType}
      level={level}
    />
  )
}
