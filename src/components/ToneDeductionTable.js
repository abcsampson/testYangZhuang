import PropTypes from 'prop-types';
import React from 'react';

import UITextConstants from '../constants/UITextConstants';
import ToneBoxUtil from '../util/ToneBoxUtil';

const { PhonationToTableClass } = UITextConstants;

const fields = [
  'syllable', 'class', 'category', 'dialect', 'value'
];

export default class ToneDeductionTable extends React.Component {
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
            <th>Consonantal Class</th>
            <th>Tonal Category</th>
            <th>Dialect</th>
            <th>Tone Value</th>
          </tr>
        </thead>
        <tbody>
          {this.props.children.map((row, index) => (
            <tr key={index} className={PhonationToTableClass[row.class]}>
              {fields.map((field, innerIndex) => (
                <th
                  key={innerIndex}
                  style={field === 'value' ? ToneBoxUtil.getToneStyleObject(row[field]) : null}
                >
                  {row[field]}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
