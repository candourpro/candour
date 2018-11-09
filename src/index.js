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

import fluidSteps from './converters/fluidSteps'
import colors from './converters/colors'
import borders from './converters/borders'
import fontFamilies from './converters/fontFamilies'
import custom from './converters/custom'

const { Provider, Consumer } = React.createContext(defaultTheme)
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
  fontFamilies,
  custom,
}
