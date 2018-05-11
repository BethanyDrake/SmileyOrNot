import React from 'react';
import { StyleSheet, Text, TextInput, Button,View } from 'react-native';

export class Login extends React.Component{
  constructor(){
    super();
    this.name = '';
  };

  getOnChangeTextFunction(){
    let loginObject = this;

    return function(text){
        console.log("text changed to: " + text);
        loginObject.name=text;

    };
};


    getOnSubmitFunction(){
      let loginObject = this;

      return function(text){
          loginObject.props.controller.login(loginObject.name);
      };
    };

  render(){
    let loginObject = this;
    return (
      <View>
      <TextInput
          style={{height: 40}}
          placeholder="Type your name here"
          onChangeText={this.getOnChangeTextFunction()}
          //onKeyPress={this.getOnKeyPressFunction()}
          onSubmitEditing={this.getOnChangeTextFunction()}
        />
        <Button title='submit' onPress={loginObject.getOnSubmitFunction()}></Button>
        </View>
    );
  };

};
