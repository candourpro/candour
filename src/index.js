import React from 'react'

import Container from './components/Container'
import Text from './components/Text'
import Headline from './components/Headline'
import Button from './components/Button'
import Input from './components/Input'
import round from './theme/round'
import isSmall from './theme/isSmall'

const { Provider, Consumer } = React.createContext({})
const CandourProvider = Provider
const CandourConsumer = Consumer

export {
  CandourProvider,
  CandourConsumer,
  Container,
  Text,
  Headline,
  Button,
  Input,
  isSmall,
}
