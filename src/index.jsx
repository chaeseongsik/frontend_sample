import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/smartadmin-production-plugins.min.css';
import './assets/css/smartadmin-production.min.css';
import './assets/css/smartadmin-skins.min.css';
import './assets/css/smartadmin-react.css';
import './assets/css/smartadmin-rtl.min.css';
import './assets/css/demo.min.css';
import './assets/css/your_style.css';
import './assets/scss/main.scss';
import 'jquery-ui-npm/jquery-ui.min.js';
import 'bootstrap/dist/js/bootstrap.js';

const history = createBrowserHistory();
const store = configureStore(history);

window.jQuery = window.$ = require('jquery');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('smartadmin-root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
