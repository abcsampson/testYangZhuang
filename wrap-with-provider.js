import React from 'react';
import { Provider } from 'react-redux';

import createStore from './src/state/createStore';

import './src/css/table.css';

const store = createStore();

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => (
  <Provider store={store}>
    <title>Yang Zhuang 佒壯語</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"
      integrity="sha384-PmY9l28YgO4JwMKbTvgaS7XNZJ30MK9FAZjjzXtlqyZCqBY6X6bXIkM++IkyinN+"
      crossOrigin="anonymous"
    />
    {element}
  </Provider>
);
