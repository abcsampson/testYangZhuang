import { connect } from 'react-redux';

import SchemeSelector from './SchemeSelector';
import ConversionActions from '../actions/ConversionActions';
import ConversionConstants from '../constants/ConversionConstants';

function mapStateToProps(state) {
  return {
    selectedItem: state.fromScheme,
    items: ConversionConstants.FROM_SCHEMES,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onChange: (scheme) => {
      dispatch(ConversionActions.changeFromScheme(scheme));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SchemeSelector);
