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

class Container extends Component {
  steps(number, defaultSteps) {
    if (!_.isNumber(number)) return step(defaultSteps);

    return step(number);
  }

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
      style,
      center,
      middle,
      narrow,
      limited,
      left,
      right,
      chaos,
      dark,
      minWindowHeight,
      pad,
      readable,
      padTop,
      padBottom,
      padLeft,
      padRight,
      spaceBetween,
      padNavbar,
      margin,
      marginTopRaw,
      marginBottomRaw,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      justify,
      textAlignRight,
      flex,
      baseline,
      wrap,
      inline,
      inlineBlock,
      alignItemsCenter,
      children,
    } = this.props;

    const TagName = this.tagName();

    return (
      <TagName
        {...this.childProps()}
        style={[
          flex && styles.flex,
          baseline && styles.baseline,
          wrap && styles.wrap,
          alignItemsCenter && styles.alignItemsCenter,
          inline && styles.inline,
          inlineBlock && styles.inlineBlock,
          center && styles.center,
          narrow && styles.narrow,
          limited && styles.limited,
          chaos && styles.chaos,
          dark && chaos && styles.dark.chaos,
          minWindowHeight && styles.minWindowHeight,
          middle && styles.middle,
          left && styles.left,
          right && styles.right,
          spaceBetween && styles.spaceBetween,
          pad && { padding: this.steps(pad, isSmall(this) ? 1.5 : 2) },
          margin && { margin: this.steps(margin, isSmall(this) ? 1.5 : 2) },
          marginLeft && { marginLeft: this.steps(marginLeft, 1) },
          marginRight && { marginRight: this.steps(marginRight, 1) },
          marginTop && { marginTop: this.steps(marginTop, 1) },
          marginBottom && { marginBottom: this.steps(marginBottom, 1) },
          marginTopRaw && { marginTop: marginTopRaw },
          marginBottomRaw && { marginBottom: marginBottomRaw },
          padTop && { paddingTop: this.steps(padTop, 1) },
          padBottom && { paddingBottom: this.steps(padBottom, 1) },
          padLeft && { paddingLeft: this.steps(padLeft, 1) },
          padRight && { paddingRight: this.steps(padRight, 1) },
          readable && styles.readable,
          padNavbar && { paddingTop: this.steps(padNavbar, 5) },
          justify && { textAlign: 'justify' },
          textAlignRight && { textAlign: 'right' },
          style,
        ]}
      >
        {children}
      </TagName>
    );
  }
};

const styles = {
  minWindowHeight: {
    minHeight: '60vh',
  },
  center: {
    margin: '0 auto',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  middle: {
    display: 'flex',
    paddingTop: `calc(100vh - 60px - ${step(6)})`,
    justifyContent: 'center',
    alignItems: 'center',
  },
  narrow: {
    width: '100%',
    maxWidth: '300px',
  },
  limited: {
    maxWidth: '700px',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chaos: {
    backgroundImage: 'url("/splash.svg")',
    backgroundSize: fluid(200, 400),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '95% 40%',
  },
  dark: {
    chaos: {
      backgroundImage: 'url("/chaos-black.svg")',
    },
  },
  readable: {
    maxWidth: maxReadableWidth,
  },
  flex: {
    display: 'flex',
  },
  baseline: {
    alignItems: 'baseline',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  inlineBlock: {
    display: 'inline-block',
  },
  inline: {
    display: 'inline',
  },
};

export default compose(
  windowSize,
  Radium,
)(Container);
