import React from 'react';
import { StyleSheet, Text, TextInput, Button,View } from 'react-native';

export class Logout extends React.Component{
  constructor(){
    super();
    this.name = '';
  };




    getOnSubmitFunction(){
      let logout = this;

      return function(text){
          logout.props.controller.logout();
      };
    };

  render(){
    let logoutObject = this;
    return (
      <View>
        <Button title='logout' onPress={logoutObject.getOnSubmitFunction()}></Button>
        </View>
    );
  };

};
