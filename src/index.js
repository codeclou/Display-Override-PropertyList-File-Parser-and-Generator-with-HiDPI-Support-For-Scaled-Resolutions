// ///////////////////////////////////////////
// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import alertify from 'alertify.js';

// ///////////////////////////////////////////
// Global CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import './index.css';

// ///////////////////////////////////////////
// App
import App from './common/components/App';
import * as serviceWorker from './serviceWorker';

alertify.logPosition('top right');
// ///////////////////////////////////////////
// Render the router
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
