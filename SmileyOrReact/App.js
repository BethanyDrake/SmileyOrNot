import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Greeting} from './greeting.js'
import {Messages} from './messages.js'
import {Sender} from './sender.js'
import {Login} from './login.js'
import {Logout} from './logout.js'

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
  logout(){
    console.log("logout")
    this.username = '';
    this.setState({isLoggedIn: false})
  };



  render() {


    if (this.state.isLoggedIn)
    {
      return (
        <View style ={styles.container}>
        <Logout controller={this}/>
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
