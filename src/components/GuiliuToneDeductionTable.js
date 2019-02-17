import PropTypes from 'prop-types';
import React from 'react';

import Display from './Display';

import ToneBoxUtil from '../util/ToneBoxUtil';

const fields = [
  'syllable', 'tone', 'dialect', 'value'
];

export default class GuiliuToneDeductionTable extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    children: [],
  };

  render() {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Syllable</th>
            <th>Guiliu Tone</th>
            <th>Dialect</th>
            <th>Tone Value</th>
          </tr>
        </thead>
        <tbody>
          {this.props.children.map((row, index) => (
            <tr key={index}>
              {fields.map((field, innerIndex) => (
                <td
                  key={innerIndex}
                  style={field === 'value' ? ToneBoxUtil.getToneStyleObject(row[field]) : null}
                >
                  <Display>{row[field]}</Display>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
