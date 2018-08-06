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
import calculateStyles from '../helpers/calculateStyles'
import { CandourConsumer } from '../index';
import modifierStyles from '../helpers/modifierStyles'

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
    return _.some(knownCssProperties, (knownProp) => camelCaseCss(knownProp) === key)
  }

  style() {
    const result = []

    _.each(this.cssProps(), (value, key) => {
      if (this.isCssFullMatch(key)) {
        if (_.isNumber(value)) {
          return result.push({ [key]: step(value) })
        }

        if (_.isBoolean(value) && value) {
          return result.push({ [key]: step(1) })
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
      candourName = 'container',
      candourBase = 'base',
      style,
      ...rest,
    } = this.props;

    const TagName = this.tagName();
    const pickStyleProps = (styles) => _.omitBy(styles, _.isObject)

    return (
      <CandourConsumer>
        {theme => (
          <TagName
            {...this.childProps()}
            style={_.flatten([
              pickStyleProps(_.get(theme, [candourName, candourBase], {})),
              modifierStyles(_.get(theme, candourName, {}), rest),
              modifierStyles(theme, rest),
              this.style(),
              style,
            ])}
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
