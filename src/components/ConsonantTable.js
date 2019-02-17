import PropTypes from 'prop-types';
import React from 'react';

import Display from './Display';

import UITextConstants from '../constants/UITextConstants';

const { PhonationToTableClass } = UITextConstants;

const fields = [
  'ipa',
  'letter',
  'phonation',
  'example',
  'meaning',
];

const columnFields = [
  'IPA', 'Letter', 'Consonantal Class', 'Example', 'Meaning',
];

export default class ConsonantTable extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    children: [],
  };

  renderRows() {
    const rows = this.props.children;
    const numRows = rows.length;
    const rowspans = new Array(numRows);

    let bottom = numRows;
    for (let i = numRows - 1; i >= 0; i--) {
      if (i > 0 && rows[i].ipa === rows[i - 1].ipa) {
        rowspans[i] = -1;
      } else {
        rowspans[i] = bottom - i;
        bottom = i;
      }
    }

    return rows.map((row, index) => {
      const numFields = fields.length;
      let rowHtml = [];

      for (let i = 0; i < numFields; i++) {
        const value = row[fields[i]];

        if (i === 0) {
          if (rowspans[index] > -1) {
            rowHtml.push(
              <td key={fields[i]} rowSpan={rowspans[index]}>
                <Display>{value}</Display>
              </td>
            );
          }
        } else {
          rowHtml.push(
            <td key={fields[i]}><Display>{value}</Display></td>
          );
        }
      }

      const { phonation } = row;
      const rowClassName = PhonationToTableClass[phonation];

      return (
        <tr key={index} className={rowClassName}>
          {rowHtml}
        </tr>
      );
    });
  }

  render() {
    return (
      <table className='table'>
        <thead>
          <tr>
            {columnFields.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }
}
