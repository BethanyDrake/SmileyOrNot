import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export class Messages extends React.Component{



  getUpdateFunction(){

    let request = this.xhttp;
    let messages = this;
    return function() {
      console.log('hi');
      //console.log(request);
        if (request.readyState == 4 && request.status == 200) {
           // Typical action to be performed when the document is ready:
          console.log('reeady');
           messages.content = request.responseText;
           messages.setState({isRefreshing: true})
           //messages.getRecentMessages();
        }
    };
  };


  constructor(){
    super();
    this.state = {isRefreshing: false};
    this.xhttp = new XMLHttpRequest();
    this.content = '';
    this.getRecentMessages = function(){
      console.log("getting recent messages");
      this.xhttp.open("GET", "http://10.242.125.31:9998/server", true);
      this.xhttp.send();
    };

    this.xhttp.onreadystatechange = this.getUpdateFunction();
    this.getRecentMessages();


  };



  render() {
    return (
      <Text>Hi {this.content} !</Text>

    );
  };
};
