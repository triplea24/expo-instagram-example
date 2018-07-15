import React from 'react';
import { KeepAwake, registerRootComponent } from 'expo';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Header } from './src/components';
import { FeedScreen } from './src/screens';
import reducers from './src/reducers';

if (__DEV__) {
  KeepAwake.activate();
}

const store = createStore(reducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Header title="Packt Instagram"/>
          <FeedScreen />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

registerRootComponent(App);