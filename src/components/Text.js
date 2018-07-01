import React, { Component } from 'react';
import { compose } from 'redux';
import Radium from 'radium';

import fluid from '@bloometry/fluid';
import colors from '../theme/colors';
import Container from './Container';
import { CandourConsumer } from '../index'

class Text extends Component {
  render() {
    const {
      level = 1,
      tight,
      grey,
      center,
      medium,
      bold,
      italic,
      underline,
      uppercase,
      color,
      style,
      flowerful,
      children,
      block,
      defaultStyle,
    } = this.props;

    return (
      <CandourConsumer>
        {theme => {
          const levelsConfig = (theme.text || [])
          const levelsAccessor = _.isArray(levelsConfig) ? level - 1 : level
          const providerStyle = levelsConfig[levelsAccessor]
          const fullDefaultStyle = defaultStyle || { ...styles[level - 1], ...providerStyle }

          return (
            <Container
              {...this.props}
              style={[
                fullDefaultStyle,
                tight && tightStyles[level - 1],
                center && { textAlign: 'center' },
                grey && { color: colors.grey },
                medium && { fontWeight: 500 },
                bold && { fontWeight: 600 },
                italic && { fontStyle: 'italic' },
                underline && { textDecoration: 'underline' },
                uppercase && { textTransform: 'uppercase' },
                color && { color },
                flowerful && customStyles.flowerful,
                block && { display: 'block' },
                style,
              ]}
            >
              {children}
            </Container>
          )
        }}
      </CandourConsumer>
    );
  }
};

const styles = [
  {
    fontSize: fluid(15, 16),
    lineHeight: fluid(17, 18),
  },
  {
    fontSize: fluid(18, 22),
    lineHeight: fluid(26, 36),
  },
  {
    fontSize: fluid(20, 39),
    lineHeight: fluid(25, 44),
  },
];

const tightStyles = [
  {
    lineHeight: fluid(15, 16),
  },
  {
    lineHeight: fluid(18, 22),
  },
  {
    lineHeight: fluid(34, 39),
  },
];

const customStyles = {
  flowerful: {
    background: 'url("flowerful.jpg")',
    color: 'transparent',
    backgroundSize: 'contain',
    backgroundClip: 'text',
    webkitFontSmoothing: 'antialiased',
    webkitBackgroundClip: 'text',
    mozBackgroundClip: 'text',
    webkitTextFillColor: 'transparent',
  },
};

export default compose(
  Radium,
)(Text);
