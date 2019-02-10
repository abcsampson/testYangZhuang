import PropTypes from 'prop-types';
import React from 'react';

const fields = [
  'ipa',
  'letter',
  'example',
  'meaning',
];

const columnLabels = [
  'Main Vowel', 'D Tone', 'IPA', 'Letter', 'Example', 'Meaning',
];

const finalOrder = [
  'empty', 'j', 'w', 'm', 'n', 'ŋ', 'p', 't', 'k',
];

const leftColumnStyle = {
  width: '10%',
};

export default class RimeTable extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    children: [],
  };

  renderRow(row) {
    return fields.map((field) => (
      <th key={field}>{row[field]}</th>
    ));
  }

  renderRows() {
    return this.props.children.map((group) => {
      const rows = finalOrder.map((final) => group[final]).filter((obj) => obj);

      return rows.map((row, index) => (
        <tr key={index}>
          {index === 0 && [
            (<th rowSpan={rows.length} className={group.long ? 'warning' : 'success'}>
              {group.main}
            </th>),
            (<th rowSpan={rows.length} className={group.long ? 'warning' : 'success'}>
              {group.long ? 'Long' : 'Short'}
            </th>)
          ]}
          {this.renderRow(row)}
        </tr>
      ));
    });
  }

  render() {
    return (
      <table className='table table-striped'>
        <col style={leftColumnStyle} />
        <col style={leftColumnStyle} />
        <thead>
          <tr>
            {columnLabels.map((column) => (
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
