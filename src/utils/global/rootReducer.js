import { combineReducers } from 'redux';
import { viewerReducer } from 'react-gis-bridge';

export default combineReducers(
  {
    ...viewerReducer,
  },
);
