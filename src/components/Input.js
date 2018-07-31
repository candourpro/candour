import React from 'react';
import { compose } from 'redux';
import Radium from 'radium';
import step from '@candour/step';
import fluid from '@candour/fluid';
import { CandourConsumer } from '../index';

import borders from '../theme/borders';
import colors from '../theme/colors';
import borderRadius from '../theme/borderRadius';
import Container from './Container';

export default Radium((props) => (
  <CandourConsumer>
    {theme => (
      <Container {...props.input} padding={1.2} component={props.component || 'input'} {...props} style={[
          styles.base,
          props.style,
          theme.input,
          props.error && styles.error,
        ]}
      />
    )}
  </CandourConsumer>
))

export const styles = {
  base: {
    backgroundColor: colors.halfWhite,
    outline: 0,
    border: '1px solid transparent',
    borderRadius,
    boxShadow: 0,
    boxSizing: 'border-box',
    width: '100%',
    WebkitAppearance: 'none',
    height: fluid(50, 70),
    padding: `0 ${step()}`,

    ':focus': {
      border: borders.yellow,
    },
  },
  error: {
    border: borders.red,
  },
};
