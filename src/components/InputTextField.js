import { connect } from 'react-redux';

import TextField from './TextField';
import ConversionActions from '../actions/ConversionActions';

function mapStateToProps(state) {
  return {
    text: state.inputText,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onChange: (text) => {
      dispatch(ConversionActions.changeInputText(text));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TextField);
