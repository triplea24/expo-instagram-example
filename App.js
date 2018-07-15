import React from 'react';
import { KeepAwake, registerRootComponent } from 'expo';
import { StyleSheet, View } from 'react-native';

if (__DEV__) {
  KeepAwake.activate();
}


import { Header } from './src/components';
import { FeedScreen } from './src/screens';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header title="Packt Instagram"/>
      <FeedScreen />
      </View>
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