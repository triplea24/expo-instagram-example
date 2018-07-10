import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Header,Post} from './src/components';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header title="Packt"/>
        <Post />
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
