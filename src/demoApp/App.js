import React, { Component } from 'react';
import { Provider, observer } from 'mobx-react';
import { Router, Route, Switch, DefaultRoute } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

import LoginPage from './login/LoginPage';
import ItemPage from './items/ItemPage';
import { ItemStore } from './items/store/ItemStore';
import { LoginStore } from './login/store/LoginStore';
import { SessionStore } from './session/store/SessionStore.js';

import './App.css';

const routerStore = new RouterStore();
const itemStore = new ItemStore();
const loginStore = new LoginStore();
const sessionStore = new SessionStore();

const stores = {
  routerStore,
  itemStore,
  loginStore,
  sessionStore
}
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routerStore);

const App = observer(class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path="/" component={LoginPage}></Route>
              <Route path="/items" component={ItemPage}></Route>
              <Route component={LoginPage}></Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
});

export default App;