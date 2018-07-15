import React from 'react';
import { KeepAwake, registerRootComponent } from 'expo';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { Header } from './src/components';
import { FeedScreen } from './src/screens';
import reducers from './src/reducers';

if (__DEV__) {
  KeepAwake.activate();
}

export default class App extends React.Component {
  render() {
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
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