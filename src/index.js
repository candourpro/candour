import React from 'react'
import _ from 'lodash'

import Container from './components/Container'
import Text from './components/Text'
import Heading from './components/Heading'
import Button from './components/Button'
import Input from './components/Input'
import round from './theme/round'
import isSmall from './theme/isSmall'
import theme from './theme'

const { Provider, Consumer } = React.createContext(theme)
const CandourProvider = ({ value, children }) => (
  <Consumer>
    {defaultTheme =>
      <Provider value={_.defaultsDeep(value, defaultTheme)}>
        {children}
      </Provider>
    }
  </Consumer>
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
  isSmall,
}
