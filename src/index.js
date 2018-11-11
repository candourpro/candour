import React from 'react'
import _ from 'lodash'

import Container from './components/Container'
import Text from './components/Text'
import Heading from './components/Heading'
import Button from './components/Button'
import Input from './components/Input'
import Code from './components/Code'

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
  levels,
  useBreakpoints,
}
