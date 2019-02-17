import PropTypes from 'prop-types';
import React from 'react';

const style = {
  fontWeight: 600,
  fontFamily: 'sans-serif',
};

export default class Yang extends React.Component {
  static propTypes = {
    children: PropTypes.string,
  };

  render() {
    return <span style={style}>{this.props.children}</span>;
  }
}
