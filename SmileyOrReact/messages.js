import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Messages extends React.Component{

  process(commaList){
    return commaList.split(',');
  };
  getUpdateFunction(){

    let request = this.xhttp;
    let messages = this;
    return function() {
      //console.log('hi');
      //console.log(request);
        if (request.readyState == 4 && request.status == 200) {
           // Typical action to be performed when the document is ready:
          //console.log('reeady');
           messages.content = request.responseText;
           messages.setState({isRefreshing: true})
           request.abort();
           messages.getRecentMessages();

        }
    };
  };

  getRecentMessages(){
    //console.log("getting recent messages");
    this.xhttp.open("GET", "http://10.242.125.31:9998/server", true);
    this.xhttp.send();
  };

  constructor(){
    super();
    this.state = {isRefreshing: false};
    this.xhttp = new XMLHttpRequest();
    this.content = 'hi';
    this.xhttp.onreadystatechange = this.getUpdateFunction();
    this.getRecentMessages();


  };
  render() {

    return (
      <View>
      <MessagesInner smileys={this.content}/>
      </View>
    );
  };

  componentWillUnmount(){
    this.xhttp.abort();
  };
};


class MessagesInner extends React.Component{

  head(){
    return this.props.smileys.split(',')[0];
  };

  tail(){
    let first_comma = this.props.smileys.indexOf(',');
    if (first_comma == -1) return '';
    return this.props.smileys.slice(first_comma+1);
  }


  render(){

    let first_comma = this.props.smileys.indexOf(',');
    if (first_comma == -1){
      return (
        <Text> {this.head()}</Text>
      );
    }
    return(
      <View>
      <Text> {this.head()}</Text>
      <MessagesInner smileys={this.tail()}/>
      </View>
    );
  };
};
