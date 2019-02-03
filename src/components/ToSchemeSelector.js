import { connect } from 'react-redux';

import SchemeSelector from './SchemeSelector';
import ConversionActions from '../actions/ConversionActions';
import ConversionConstants from '../constants/ConversionConstants';

function mapStateToProps(state) {
  return {
    selectedItem: state.toScheme,
    items: ConversionConstants.TO_SCHEMES,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onChange: (scheme) => {
      dispatch(ConversionActions.changeToScheme(scheme));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SchemeSelector);
