import React from 'react';
import { StyleSheet, Text, TextInput, Button,View } from 'react-native';

export class Sender extends React.Component{



  constructor(){
    super();
    this.state = {isRefreshing: false};
    this.xhttp = new XMLHttpRequest();
    this.toSend = '';


  };



  getSendFunction(){
    let request = this.xhttp;
    let sender = this;
    return function(){

      console.log("sending: " + sender.toSend);
      console.log("yah");
      request.open("POST", "http://10.242.125.31:9998/server", true);
      request.send(sender.toSend);
      request.abort();
    };
  };

  getOnChangeTextFunction(){
    let sender = this;

    return function(text){
        console.log("text changed to: " + text);
        sender.toSend=text;
    };
};


  render(){
    let sender = this;
    return (
      <View>
      <TextInput
          style={{height: 40}}
          placeholder="Type here to send a message!"
          onChangeText={this.getOnChangeTextFunction()}
        />
        <Button title='submit' onPress={sender.getSendFunction()}></Button>
        </View>
    );
  };

};
