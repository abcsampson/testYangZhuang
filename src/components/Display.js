import PropTypes from 'prop-types';
import React from 'react';
import reactStringReplace from 'react-string-replace';

import Ipa from './Ipa';
import Yang from './Yang';

export default class Display extends React.Component {
  static propTypes = {
    children: PropTypes.string,
  };

  render() {
    let str = this.props.children;
    let key = 0;
    str = reactStringReplace(str, /<yang>([^<>]*)<\/yang>/g, (match) => (
      <Yang key={key++}>{match}</Yang>
    ));
    str = reactStringReplace(str, /<ipa>([^<>]*)<\/ipa>/g, (match) => (
      <Ipa key={key++}>{match}</Ipa>
    ));
    return str;
  }
}
