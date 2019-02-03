import { createStore as reduxCreateStore } from 'redux';

import ActionConstants from '../constants/ActionConstants';
import ConversionConstants from '../constants/ConversionConstants';
import UITextConstants from '../constants/UITextConstants';
import CombinedUtil from '../util/CombinedUtil';

const reducer = (state, action) => {
  switch (action.type) {
    case ActionConstants.CHANGE_FROM_SCHEME:
      return {
        ...state,
        fromScheme: action.payload.scheme,
      };
    case ActionConstants.CHANGE_TO_SCHEME:
      return {
        ...state,
        toScheme: action.payload.scheme,
      };
    case ActionConstants.CHANGE_INPUT_TEXT:
      return {
        ...state,
        inputText: action.payload.text,
      };
    case ActionConstants.CHANGE_OUTPUT_TEXT:
      return {
        ...state,
        outputText: action.payload.text,
      };
    case ActionConstants.CONVERT:
      return {
        ...state,
        outputText: CombinedUtil.convert(state.fromScheme, state.toScheme, state.inputText),
      };
    default:
      return state;
  }
}

const initialState = {
  inputText: UITextConstants.DEFAULT_INPUT_STRING,
  outputText: '',
  fromScheme: ConversionConstants.SCHEMES.LIAO,
  toScheme: ConversionConstants.SCHEMES.LEE,
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
