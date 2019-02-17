import React from 'react'
import PropTypes from 'prop-types';

const style = {
  fontWeight: 600,
  fontSize: '21px',
};

export default class TextField extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    onChange: PropTypes.func,
  };

  _onChange = (event) => {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <textarea rows='5' class='form-control' onChange={this._onChange} style={style} value={this.props.text} />
    );
  }
}
