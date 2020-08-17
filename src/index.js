// ///////////////////////////////////////////
// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import alertify from 'alertify.js';
import { Provider } from 'react-redux';

// ///////////////////////////////////////////
// Global CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'codemirror/lib/codemirror.css';

// ///////////////////////////////////////////
// App
import App from './common/components/App';
import * as serviceWorker from './serviceWorker';

// ///////////////////////////////////////////
// REDUX AND REDUX FORM
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
const reducers = { form: formReducer };
const reducer = combineReducers(reducers);
const store = createStore(reducer);

alertify.logPosition('top right');
// ///////////////////////////////////////////
// Render the router
ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
