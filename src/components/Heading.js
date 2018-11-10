import React from 'react'
import Container from './Container'
import levelFromProps from '../lib/levelFromProps'

export default ({
  children,
  component: componentProp,
  candourName = 'heading',
  ...rest,
}) => {
  const level = levelFromProps(rest) || 1
  const component = componentProp || level > 6 ? 'div' : `h${level}`

  return (
    <Container
      {...rest}
      component={component}
      candourName={candourName}
      level={level}
    >
      {children}
    </Container>
  )
}
