import ActionConstants from '../constants/ActionConstants';

export default {
  changeFromScheme(scheme) {
    return {
      type: ActionConstants.CHANGE_FROM_SCHEME,
      payload: {
        scheme,
      },
    };
  },
  changeToScheme(scheme) {
    return {
      type: ActionConstants.CHANGE_TO_SCHEME,
      payload: {
        scheme,
      },
    };
  },
  changeInputText(text) {
    return {
      type: ActionConstants.CHANGE_INPUT_TEXT,
      payload: {
        text,
      },
    };
  },
  changeOutputText(text) {
    return {
      type: ActionConstants.CHANGE_OUTPUT_TEXT,
      payload: {
        text,
      },
    };
  },
  convert() {
    return {
      type: ActionConstants.CONVERT,
    };
  },
};
