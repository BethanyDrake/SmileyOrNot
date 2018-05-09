var loginDiv = document.getElementById("login");
var submitMessageDiv = document.getElementById("submitMessageDiv");
var submitNameButton = document.getElementById("submitName");
var usernameInput = document.getElementById("username");
var username = '';
submitMessageDiv.style.display = "none";
submitNameButton.onclick = function(){
  username = usernameInput.value;

  var greeting = document.getElementById("greeting");
  greeting.innerText = "Hi "+ username + "!";
  loginDiv.style.display = "none";
  submitMessageDiv.style.display = "";
  

}
