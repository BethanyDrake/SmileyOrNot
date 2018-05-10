import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Greeting} from './greeting.js'
import {Messages} from './messages.js'
import {Sender} from './sender.js'
export default class App extends React.Component {
  render() {
    return (

      <View style ={styles.container}>
      <Sender/>
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
