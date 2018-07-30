import React, { Component } from 'react';
import { compose } from 'redux';
import Radium from 'radium';

import borders from '../theme/borders';
import colors from '../theme/colors';
import borderRadius from '../theme/borderRadius';
import Container from './Container';

class Input extends Component {
  render() {
    const {
      meta: {
        touched,
        error,
      },
      hideError,
    } = this.props;

    return <Container {...this.props.input} padding={1.2} component='input' {...this.props} style={[
        styles.input,
        this.props.style,
        !hideError && touched && error && styles.error
      ]}
    />;
  }
};

const styles = {
  input: {
    backgroundColor: colors.halfWhite,
    outline: 0,
    border: '1px solid transparent',
    borderRadius,
    boxShadow: 0,
    boxSizing: 'border-box',
    width: '100%',
    WebkitAppearance: 'none',

    ':focus': {
      border: borders.yellow,
    },
  },
  error: {
    border: borders.red,
  },
};

export default compose(
  Radium,
)(Input);
