import PropTypes from 'prop-types';
import React from 'react';

import UITextConstants from '../constants/UITextConstants';

const { PhonationToTableClass } = UITextConstants;

const fields = [
  'category', '1A', '1U', '1G', '2', 'rule',
];

export default class ToneCategoryTable extends React.Component {
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
            <th>Tonal Category</th>
            <th colSpan='4'>Examples (1A, 1U, 1G, 2)</th>
            <th>Rule</th>
          </tr>
        </thead>
        <tbody>
          {this.props.children.map((row, index) => (
            <tr key={index}>
              {fields.map((field, innerIndex) => (
                <th key={innerIndex} className={PhonationToTableClass[field]}>
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
