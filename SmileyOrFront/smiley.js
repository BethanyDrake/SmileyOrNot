console.log("running! still");

var postRequest = new XMLHttpRequest();
var messageText = "";

var submitMessage = function(message){
  postRequest.open("POST", "http://10.242.125.31:9998/server", true);

  postRequest.send(username+": "+message);
};



var submitButton = document.getElementById("submitMessage");
var input = document.getElementById("message");

submitButton.onclick = function(){
  console.log("clicked by " + username);
  messageText =input.value;
  input.value = "";
  console.log(messageText);
  submitMessage(messageText);
};
