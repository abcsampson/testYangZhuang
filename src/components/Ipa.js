import PropTypes from 'prop-types';
import React from 'react';

const style = {
  fontWeight: 100,
  fontFamily: 'serif',
};

export default class Ipa extends React.Component {
  static propTypes = {
    children: PropTypes.string,
  };

  render() {
    return <span style={style}>{this.props.children}</span>;
  }
}
