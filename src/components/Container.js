import React, { Component } from 'react';
import { compose } from 'redux';
import Radium from 'radium';
import windowSize from 'react-window-size';
import _ from 'lodash';
import filterInvalidDOMProps from 'filter-invalid-dom-props';

import step from '@candour/step';
import fluid from '@candour/fluid';
import maxReadableWidth from '../theme/maxReadableWidth';
import isSmall from '../theme/isSmall';
import { CandourConsumer } from '../index';
import style from '../helpers/style'

class Container extends Component {
  isHtmlElement() {
    return _.isString(this.component());
  }

  tagName() {
    return this.isHtmlElement() ? this.component() : Radium(this.component());
  }

  component() {
    const {
      component = 'div',
    } = this.props;

    return component;
  }

  childProps() {
    if (!this.isHtmlElement()) {
      return _.pick(this.props, _.keys(this.component().propTypes).concat('onMouseEnter', 'onMouseLeave'));
    }

    return filterInvalidDOMProps(this.props);
  }

  render() {
    const {
      children,
      candourName = 'container',
      candourBase = 'base',
    } = this.props;

    const TagName = this.tagName();

    return (
      <CandourConsumer>
        {theme => (
          <TagName
            {...this.childProps()}
            style={style(theme, this.props, candourName, candourBase)}
          >
            {children}
          </TagName>
        )}
      </CandourConsumer>
    );
  }
};

export default compose(
  windowSize,
  Radium,
)(Container);
