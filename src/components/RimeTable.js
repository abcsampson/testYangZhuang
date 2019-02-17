import PropTypes from 'prop-types';
import React from 'react';

import Display from './Display';

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
];

const shortenedInData = shortened.map((rime) => (`<yang>${rime}</yang>`));

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
        if (shortenedInData.includes(row.letter)) {
          className = 'danger';
        } else if (row.letter === '<yang>oa/oh</yang>') {
          className = 'info';
        }
      }

      return (
        <td key={field} className={className}>
          <Display>{row[field]}</Display>
        </td>
      );
    });
  }

  renderRows() {
    return this.props.children.map((group) => {
      const rows = finalOrder.map((final) => group[final]).filter((obj) => obj);

      return rows.map((row, index) => (
        <tr key={index}>
          {index === 0 && [
            (<td key='vowel' rowSpan={rows.length} className={group.long ? 'warning' : 'success'}>
              <Display>{group.main}</Display>
            </td>),
            (<td key='tenseness' rowSpan={rows.length} className={group.long ? 'warning' : 'success'}>
              {group.long ? 'Tense' : 'Lax'}
            </td>)
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
