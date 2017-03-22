import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom'
// import { Router, browserHistory } from 'react-router'

// import createHistory from 'history/createBrowserHistory'

// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import routes from './routes'
import rootReducer from './reducers'

// const history = createHistory()

// const middleware = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  // only to enable Redux dev tools
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxPromise)))  // creating store with rootReducer

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>, document.getElementById('root')
);
