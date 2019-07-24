import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Root from './pages/root/Root';
import * as stores from './store';

import './app.global.css';

render(
  <AppContainer>
    <Provider {...stores}>
      <Root />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./pages/root/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./pages/root/Root').default;
    render(
      <AppContainer>
        <Provider {...stores}>
          <NextRoot />
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
