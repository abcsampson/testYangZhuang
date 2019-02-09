import PropTypes from 'prop-types';
import React from 'react';

import ToneBoxRow from './ToneBoxRow';

const columnLabels = [
  'A', 'B', 'C', 'DL', 'DS',
];

const rowLabels = [
  '1A', '1U', '1G', '2',
];

export default class ToneBox extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  };

  static defaultProps = {
    title: '',
    children: [],
  };

  render() {
    const displayedColumnLabels = [this.props.title].concat(columnLabels);

    return (
      <table className='table'>
        <thead>
          <tr>
            {displayedColumnLabels.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.props.children.map((row, index) => (
            <ToneBoxRow key={index} title={rowLabels[index]}>
              {row}
            </ToneBoxRow>
          ))}
        </tbody>
      </table>
    );
  }
}
