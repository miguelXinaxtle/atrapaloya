import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Screens from './src/screens';
import {Provider} from 'react-redux';
import store from './src/store';

export default function Root() {
  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Root);
