import React from 'react'
import _ from 'lodash'

import Container, { styles as container } from './components/Container'
import Text, { styles as text } from './components/Text'
import Headline, { styles as headline } from './components/Headline'
import Button, { styles as button } from './components/Button'
import Input, { styles as input } from './components/Input'
import round from './theme/round'
import isSmall from './theme/isSmall'

const theme = {
  container,
  text,
  headline,
  button,
  input,
}

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
  Headline,
  Button,
  Input,
  isSmall,
}
