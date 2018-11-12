import React from 'react'
import _ from 'lodash'

import Container from './primitives/Container'
import Text from './primitives/Text'
import Heading from './primitives/Heading'
import Button from './primitives/Button'
import Input from './primitives/Input'
import Code from './primitives/Code'
import Link from './primitives/Link'

import defaultTheme from './theme'
import levels from './lib/levels'
import useBreakpointsFunction from './lib/useBreakpointsFunction'

const Context = React.createContext(defaultTheme)
const { Provider, Consumer } = Context

const CandourConsumer = Consumer
const CandourProvider = ({
  theme,
  converters = [],
  children,
  ...rest,
}) => (
  <Provider value={{
    theme: _.defaultsDeep(_.cloneDeep(theme), defaultTheme(converters)),
    converters,
    ...rest,
  }}>
    {children}
  </Provider>
)

const useBreakpoints = useBreakpointsFunction(Context)

export {
  CandourProvider,
  CandourConsumer,
  Container,
  Text,
  Heading,
  Button,
  Input,
  Code,
  Link,
  levels,
  useBreakpoints,
}
