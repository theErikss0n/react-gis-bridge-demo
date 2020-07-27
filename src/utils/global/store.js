import { createStore } from 'redux';
import React from 'react';
import rootReducer from './rootReducer';

const initialState = {};
const enhancers = [];
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-underscore-dangle
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}
export const store = createStore(rootReducer, initialState);

export const Context = React.createContext(store);
