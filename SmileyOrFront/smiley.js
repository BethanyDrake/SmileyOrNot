console.log("running! still");

var xhttp = new XMLHttpRequest();
var messageText = "";


//xhttp.open("GET", "http://localhost:9998/test/hithere", true);
var getRecentMessages = function(){
  xhttp.open("GET", "http://localhost:9998/test", true);
  xhttp.send();
};


xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("messages").innerHTML = xhttp.responseText;
       getRecentMessages();
    }
};


getRecentMessages();

var submitMessage = function(message){
  xhttp.open("POST", "http://localhost:9998/test", true);

  xhttp.send(message);
};


// xhttp.open("POST", "http://localhost:9998/test", true);
//
// xhttp.send(messageText);



var submitButton = document.getElementById("submitButton");
var input = document.getElementById("message");

submitButton.onclick = function(){
  console.log("clicked");
  messageText =input.value;
  input.value = "";
  console.log(messageText);
  submitMessage(messageText);
};
