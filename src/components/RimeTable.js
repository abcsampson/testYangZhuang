import PropTypes from 'prop-types';
import React from 'react';

const fields = [
  'ipa',
  'letter',
  'example',
  'meaning',
];

const columnLabels = [
  'Main Vowel', 'Tenseness', 'IPA', 'Letter', 'Example', 'Meaning',
];

const finalOrder = [
  'empty', 'j', 'w', 'm', 'n', 'ŋ', 'p', 't', 'k',
];

const shortened = [
    'a', 'ey', 'ew', 'ow', 'uy', 'o', 'u',
]

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
    return fields.map((field) => {
      let className = null;
      if (field === 'letter') {
        if (shortened.includes(row.letter)) {
          className = 'danger';
        } else if (row.letter === 'oa/oh') {
          className = 'info';
        }
      }

      return (
        <th key={field} className={className}>
          {row[field]}
        </th>
      );
    });
  }

  renderRows() {
    return this.props.children.map((group) => {
      const rows = finalOrder.map((final) => group[final]).filter((obj) => obj);

      return rows.map((row, index) => (
        <tr key={index}>
          {index === 0 && [
            (<th key='vowel' rowSpan={rows.length} className={group.long ? 'warning' : 'success'}>
              {group.main}
            </th>),
            (<th key='tenseness' rowSpan={rows.length} className={group.long ? 'warning' : 'success'}>
              {group.long ? 'Tense' : 'Lax'}
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
        <colgroup>
          <col style={leftColumnStyle} />
          <col style={leftColumnStyle} />
        </colgroup>
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
