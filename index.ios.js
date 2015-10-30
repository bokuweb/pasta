'use strict';

import React, {AppRegistry,  Component}  from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';
import thunk from 'redux-thunk';
import * as reducers from './app/reducers';
import App from './app/containers/app';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class Index extends Component {
  render() {
    return (
        <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
 }

AppRegistry.registerComponent('Pasta', () => Index);
