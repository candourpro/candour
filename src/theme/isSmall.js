import _ from 'lodash';

export default (that) => {
  if (_.isUndefined(that.props.windowWidth)) throw new Error('Import windowSize module please');

  return that.props.windowWidth <= 768;
};
