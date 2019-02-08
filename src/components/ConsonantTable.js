import PropTypes from 'prop-types';
import React from 'react';

const fields = [
  "ipa",
  "letter",
  "phonation",
  "example",
  "meaning",
];

const displayedFields = [
  "IPA", "Letter", "Consonantal Class", "Example", "Meaning",
];

const phonationToRowClass = {
  '1A': 'warning',
  '1G': 'success',
  '1U': 'danger',
  '2': 'info',
};

class ConsonantTable extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.object),
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
              <th key={fields[i]} rowSpan={rowspans[index]}>
                {value}
              </th>
            );
          }
        } else {
          rowHtml.push(
            <th key={fields[i]}>{value}</th>
          );
        }
      }

      const { phonation } = row;
      const rowClassName = phonationToRowClass[phonation];

      return (
        <tr key={index} className={rowClassName}>
          {rowHtml}
        </tr>
      );
    });
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            {displayedFields.map((column) => (
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

export default ConsonantTable;
