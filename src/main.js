// ///////////////////////////////////////////
// Polyfills
import 'babel-polyfill';

// ///////////////////////////////////////////
// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import alertify from 'alertify.js';
import { Provider } from 'react-redux';
alertify.logPosition('top right');

// ///////////////////////////////////////////
// App
import App from './common/components/App';

// ///////////////////////////////////////////
// REDUX AND REDUX FORM
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
const reducers = { form: formReducer };
const reducer = combineReducers(reducers);
const store = createStore(reducer);

// ///////////////////////////////////////////
// Render the router
ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));

