import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Greeting} from './greeting.js'
import {Messages} from './messages.js'
import {Sender} from './sender.js'
import {Login} from './login.js'
export default class App extends React.Component {

  constructor(){
    super();
    this.username = '';
    this.state = {isLoggedIn: false};
  };

  login(username){
    console.log("login " + username);
    this.username = username;
    this.setState({isLoggedIn: true})
  };


  render() {


    if (this.state.isLoggedIn)
    {
      return (
        <View style ={styles.container}>
        <Sender username={this.username}/>
        <Messages/>
        </View>
      )
    }
    return (
      <View style ={styles.container}>
      <Login controller={this}/>
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
