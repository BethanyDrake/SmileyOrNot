var loginDiv = document.getElementById("login");
var submitMessageDiv = document.getElementById("submitMessageDiv");
var submitNameButton = document.getElementById("submitName");
var usernameInput = document.getElementById("username");
var username = '';
submitMessageDiv.style.display = "none";
submitNameButton.onclick = function(){
  username = usernameInput.value;
  loginDiv.style.display = "none";
  submitMessageDiv.style.display = "";
  //submitMessageDiv.hidden = false;

}
