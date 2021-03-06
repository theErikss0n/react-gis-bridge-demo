import React from 'react';
import ReactDOM from 'react-dom';
import 'redux-thunk';
import 'reset-css';
import * as serviceWorker from 'utils/global/serviceWorker';
import App from './App';

const render = () => {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('root'),
  );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

// Render once
render();
