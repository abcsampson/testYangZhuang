import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ConversionActions from '../actions/ConversionActions';
import FromSchemeSelector from '../components/FromSchemeSelector';
import Header from '../components/Header';
import InputTextField from '../components/InputTextField';
import OutputTextField from '../components/OutputTextField';
import ToSchemeSelector from '../components/ToSchemeSelector';

const convertButtonStyle = {
  width: '100%',
  fontSize: '18pt',
};

class Index extends React.Component {
  static propTypes = {
    onInputClearClick: PropTypes.func,
    onOutputClearClick: PropTypes.func,
    onConvert: PropTypes.func,
  };

  render() {
    return (
      <div>
        <Header subpage='' />
        <hr />
        <div className='container'>
          <div className='col-md-3'>
            <h2>From</h2>
            <FromSchemeSelector />
            <input type='button' className='btn-warning' value='Clear' onClick={this.props.onInputClearClick} />
          </div>
          <div className='col-md-9'>
            <InputTextField />
            <input
              type='button'
              className='btn-success center'
              style={convertButtonStyle}
              value='&#x2193; Convert &#x2193;'
              onClick={this.props.onConvert}
            />
          </div>
        </div>
        <hr />
        <div className='container'>
          <div className='col-md-3'>
            <h2>To</h2>
            <ToSchemeSelector />
            <input type='button' className='btn-warning' value='Clear' onClick={this.props.onOutputClearClick} />
          </div>
          <div className='col-md-9'>
            <OutputTextField />
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onInputClearClick: () => {
      dispatch(ConversionActions.changeInputText(''));
    },
    onOutputClearClick: () => {
      dispatch(ConversionActions.changeOutputText(''));
    },
    onConvert: () => {
      dispatch(ConversionActions.convert());
    },
  };
}

export default connect(null, mapDispatchToProps)(Index);
