/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';

import Todo from './src/Todo';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};

export default App;
