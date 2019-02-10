import PropTypes from 'prop-types';
import React from 'react';

import UITextConstants from '../constants/UITextConstants';

const { PhonationToTableClass } = UITextConstants;

const fields = [
  'ipa',
  'letter',
  'phonation',
  'example',
  'meaning',
];

const guiliuFields = [
  'ipa',
  'letter',
  'example',
  'meaning',
];

const columnFields = [
  'IPA', 'Letter', 'Consonantal Class', 'Example', 'Meaning',
];

const guiliuColumnFields = [
  'IPA', 'Letter', 'Example', 'Meaning',
];

export default class ConsonantTable extends React.Component {
  static propTypes = {
    isGuiliu: PropTypes.bool,
    children: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    isGuiliu: false,
    children: [],
  };

  renderRows() {
    const rows = this.props.children;
    const numRows = rows.length;
    const rowspans = new Array(numRows);
    const usedFields = this.props.isGuiliu ? guiliuFields : fields;

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
      const numFields = usedFields.length;
      let rowHtml = [];

      for (let i = 0; i < numFields; i++) {
        const value = row[usedFields[i]];

        if (i === 0) {
          if (rowspans[index] > -1) {
            rowHtml.push(
              <th key={usedFields[i]} rowSpan={rowspans[index]}>
                {value}
              </th>
            );
          }
        } else {
          rowHtml.push(
            <th key={usedFields[i]}>{value}</th>
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
    const tableClassName = this.props.isGuiliu ? 'table table-striped' : 'table';
    const displayedColumnFields = this.props.isGuiliu ? guiliuColumnFields : columnFields;

    return (
      <table className={tableClassName}>
        <thead>
          <tr>
            {displayedColumnFields.map((column) => (
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
