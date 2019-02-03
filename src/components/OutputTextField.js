import { connect } from 'react-redux';

import TextField from './TextField';
import ConversionActions from '../actions/ConversionActions';

function mapStateToProps(state) {
  return {
    text: state.outputText,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onChange: (text) => {
      dispatch(ConversionActions.changeOutputText(text));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TextField);
