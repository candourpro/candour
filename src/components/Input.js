import React from 'react';
import { compose } from 'redux';
import Radium from 'radium';
import step from '@candour/step';
import fluid from '@candour/fluid';
import _ from 'lodash'
import { CandourConsumer } from '../index';

import borders from '../theme/borders';
import colors from '../theme/colors';
import borderRadius from '../theme/borderRadius';
import Container from './Container';
import modifierStyles from '../helpers/modifierStyles'

export default Radium((props) => (
  <CandourConsumer>
    {theme => (
      <Container {...props.input} padding={1.2} component={props.component || 'input'} {...props} style={_.flatten([
          theme.input.base,
          modifierStyles(theme.input, props),
          props.style,
        ])}
      />
    )}
  </CandourConsumer>
))
