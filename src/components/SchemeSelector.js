import React from 'react'
import PropTypes from 'prop-types';

export default class SchemeSelector extends React.Component {
  static propTypes = {
    selectedItem: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func,
  };

  _onChange = (event) => {
    this.props.onChange(event.target.value);
  }

  render() {
    const {
      selectedItem,
      items,
    } = this.props;

    return (
      <select onChange={this._onChange} value={selectedItem}>
        {items.map((item) => (
          <option
            key={item.key}
            value={item.key}
          >
            {item.text}
          </option>
        ))}
      </select>
    );
  }
}
