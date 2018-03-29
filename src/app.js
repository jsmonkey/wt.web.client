import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux';

export default class App {
  constructor(htmlRoot, RootComponent, store, browserHistory) {
    this.browserHistory = browserHistory;
    this.htmlRoot = htmlRoot;
    this.RootComponent = RootComponent;
    this.store = store;
  }

  render() {
    const {
      store, browserHistory, RootComponent, htmlRoot,
    } = this;

    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <ConnectedRouter history={browserHistory}>
            <RootComponent />
          </ConnectedRouter>
        </Provider>
      </AppContainer>,
      htmlRoot,
    );
  }
}
