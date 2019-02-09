import PropTypes from 'prop-types';
import React from 'react';

import UITextConstants from '../constants/UITextConstants';

const { PhonationToTableClass } = UITextConstants;

function getStyleObject(tone) {
  const s = parseInt(tone[0]) - 1;
  const t = parseInt(tone[1]) - 1;
  const red = 191 + (s - t) * 16;
  const green = 127 + s * 32;
  const blue = 127 + t * 32;

  return {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  };
}

export default class ToneBoxRow extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    title: '',
    children: [],
  };

  render() {
    return (
      <tr>
        <th className={PhonationToTableClass[this.props.title]}>
          {this.props.title}
        </th>
        {this.props.children.map((cell, index) => (
          <th key={index} style={getStyleObject(cell)}>{cell}</th>
        ))}
      </tr>
    );
  }
}
