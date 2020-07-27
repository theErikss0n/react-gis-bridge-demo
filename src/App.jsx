import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { store } from 'utils/global/store';

import 'antd/dist/antd.css';
import Viewer from 'components/Viewer';

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Viewer />
      </AppContainer>
    </Provider>
  );
}

export default hot(App);
