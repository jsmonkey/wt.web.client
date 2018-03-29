import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import StoreProvider from './store-provider';
import App from './app';

import Root from './containers/root/root';

const htmlRoot = document.getElementById('main');
const history = createHistory();
const store = new StoreProvider(history).getStore();
const app = new App(htmlRoot, Root, store, history);

app.render();

if (module.hot) {
  module.hot.accept('./containers/root/root', () => {
    app.render();
  });
}
