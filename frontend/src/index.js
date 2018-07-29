import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './App';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

import './styles/main.scss';

const store = configureStore(createBrowserHistory);

const renderDOM = Component => render(
  <AppContainer>
    <Provider store={store}>
      <Router>
        <Component />
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('react-root'),
);

renderDOM(App);
registerServiceWorker();
