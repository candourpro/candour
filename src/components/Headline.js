import React, { Component } from 'react';
import { compose } from 'redux';
import Radium from 'radium';

import fluid from '@candour/fluid';

import Text from './Text';
import { CandourConsumer } from '../index';

class Headline extends Component {
  render() {
    const {
      level = 1,
      style,
      children,
    } = this.props;

    return (
      <CandourConsumer>
        {theme => {
          const levelsConfig = (theme.headline || [])
          const levelsAccessor = _.isArray(levelsConfig) ? level - 1 : level
          const providerStyle = levelsConfig[levelsAccessor]
          const defaultStyle = providerStyle || styles[level - 1]

          return (
            <Text
              {...this.props}
              component={`h${level}`}
              defaultStyle={{}}
              style={{ ...defaultStyle, ...style }}
            >
              {children}
            </Text>
          )
        }}
      </CandourConsumer>
    );
  }
};

export const styles = [
  {
    fontSize: fluid(40, 140),
    lineHeight: fluid(60, 150),
  },
  {
    fontSize: fluid(35, 50),
    lineHeight: fluid(40, 55),
  },
  {
    fontSize: fluid(24, 30),
    lineHeight: fluid(28, 34),
  },
  {
    fontSize: fluid(20, 24),
    lineHeight: fluid(23, 33),
  },
];

export default compose(
  Radium,
)(Headline);
