import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { getCountries } from './actions/actions-countries';
import * as serviceWorker from './serviceWorker';
import DevTools from './DevTools';

render (
  <Provider store={store}>
    <div>
      <h1>Inicjalizacja projektu</h1>
      <DevTools />
    </div>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
store.dispatch(getCountries());
