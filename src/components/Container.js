import React, { Component } from 'react';
import { compose } from 'redux';
import Radium from 'radium';
import windowSize from 'react-window-size';
import _ from 'lodash';
import filterInvalidDOMProps from 'filter-invalid-dom-props';
import { all as knownCssProperties } from 'known-css-properties'
import camelCaseCss from 'camelcase-css'

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

  cssProps() {
    return _.pickBy(this.props, (_value, key) => this.partialCssMatch(key))
  }

  partialCssMatch(key) {
    return _.find(_.reverse(_.sortBy(knownCssProperties, 'length')), (knownProp) =>
      _.startsWith(key, camelCaseCss(knownProp))
    )
  }

  isCssFullMatch(key) {
    return _.some(knownCssProperties, (knownProp) => knownProp === key)
  }

  style() {
    const result = []

    _.each(this.cssProps(), (value, key) => {
      if (this.isCssFullMatch(key)) {
        if (_.isNumber(value)) {
          return result.push({ [key]: step(value) })
        }

        if (_.isBoolean(value) && value) {
          return result.push({ [key]: step(2) })
        }

        return result.push({ [key]: value })
      }

      result.push({ [camelCaseCss(this.partialCssMatch(key))]: _.kebabCase(key.replace(new RegExp(`^${camelCaseCss(this.partialCssMatch(key))}`), '')) })
      return
    })

    result.push(this.props.style)

    return _.flatten(result)
  }

  render() {
    const {
      children,
    } = this.props;

    const TagName = this.tagName();
    console.log(_.reverse(_.sortBy(knownCssProperties, 'length')))
    console.log(this.style())

    return (
      <TagName
        {...this.childProps()}
        style={this.style()}
      >
        {children}
      </TagName>
    );
  }
};

export const styles = {
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
  flexEnd: {
    display: 'flex',
    justifyContent: 'flex-end',
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
