import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export class Sender extends React.Component{

  render(){
    return (
      <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
    );
  };

};
