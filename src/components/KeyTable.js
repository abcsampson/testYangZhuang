import PropTypes from 'prop-types';
import React from 'react';

import Display from './Display';

export default class KeyTable extends React.Component {
  static propTypes = {
    fields: PropTypes.arrayOf(PropTypes.string),
    labels: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.arrayOf(PropTypes.object),
    setRowClass: PropTypes.func,
  };

  static defaultProps = {
    fields: [],
    labels: [],
    children: [],
    setRowClass: () => {},
  };

  render() {
    const { fields, labels, children, setRowClass } = this.props;

    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            {labels.map((label, index) => (
              <th key={index}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children.map((row, index) => (
            <tr key={index} className={setRowClass(row, index)}>
              {fields.map((field, innerIndex) => (
                <td key={innerIndex}><Display>{row[field]}</Display></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
