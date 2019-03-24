import React from 'react'
import _ from 'lodash'
import { Style as RadiumStyle } from 'radium'

import Container from './primitives/Container'
import Text from './primitives/Text'
import Heading from './primitives/Heading'
import Button from './primitives/Button'
import Input from './primitives/Input'
import Code from './primitives/Code'
import Link from './primitives/Link'

import defaultTheme from './theme'
import levels from './lib/levels'
import convert from './lib/convert'
import useBreakpointsFunction from './lib/useBreakpointsFunction'
import useConvertFunction from './lib/useConvertFunction'

const Context = React.createContext(defaultTheme([]))
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
const useConvert = useConvertFunction(Context)

const Style = ({ rules, ...rest }) => (
  <CandourConsumer>
    {(config) => (
      <RadiumStyle rules={convert(config, rules)} {...rest} />
    )}
  </CandourConsumer>
)

const S = Container

export {
  CandourProvider,
  CandourConsumer,
  S,
  Container,
  Text,
  Heading,
  Button,
  Input,
  Code,
  Link,
  Style,
  levels,
  useBreakpoints,
  useConvert,
}
