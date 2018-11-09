import React from 'react'
import _ from 'lodash'
import step from '@candour/step'

import Container from './components/Container'
import Text from './components/Text'
import Heading from './components/Heading'
import Button from './components/Button'
import Input from './components/Input'
import Code from './components/Code'

import round from './theme/round'
import isSmall from './theme/isSmall'
import defaultTheme from './theme'
import levels from './lib/levels'

import fluidSteps from './parsers/fluidSteps'
import colors from './parsers/colors'
import borders from './parsers/borders'
import custom from './parsers/custom'

const { Provider, Consumer } = React.createContext(defaultTheme)
const CandourProvider = ({
  theme,
  parsers = [],
  children,
  ...rest,
}) => (
  <Provider value={{
    theme: _.defaultsDeep(_.cloneDeep(theme), defaultTheme(parsers)),
    parsers,
    ...rest,
  }}>
    {children}
  </Provider>
)
const CandourConsumer = Consumer

export {
  CandourProvider,
  CandourConsumer,
  Container,
  Text,
  Heading,
  Button,
  Input,
  Code,
  isSmall,
  levels,
  fluidSteps,
  colors,
  borders,
  custom,
}
