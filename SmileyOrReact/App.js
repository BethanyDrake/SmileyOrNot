import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Greeting} from './greeting.js'
import {Messages} from './messages.js'
export default class App extends React.Component {
  render() {
    return (

      <View style ={styles.container}>
      <View>
        <Text>Open up App.js to start working on your sapp!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
      <Messages/>
      </View>

    )
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
