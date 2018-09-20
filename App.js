import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Main from './src'
import reducers from './src/state'

const middleware = [thunk, logger];
const store = createStore(
  reducers,
  compose(applyMiddleware(...middleware))
);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}