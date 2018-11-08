import React from 'react'
import _ from 'lodash'
import step from '@candour/step'

import Container from './components/Container'
import Text from './components/Text'
import Heading from './components/Heading'
import Button from './components/Button'
import Input from './components/Input'
import Code from './components/Code'
import Normalize from './components/Normalize'

import round from './theme/round'
import isSmall from './theme/isSmall'
import theme from './theme'
import levels from './helpers/levels'

const { Provider, Consumer } = React.createContext(theme)
const CandourProvider = ({ theme: value, sizeConverter = step, children }) => (
  <Provider value={{
    theme: _.defaultsDeep(_.cloneDeep(value), theme),
    sizeConverter,
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
  Normalize,
  isSmall,
  levels,
}
