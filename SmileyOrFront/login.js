var loginDiv = document.getElementById("login");
var submitMessageDiv = document.getElementById("submitMessageDiv");
var logoutDiv = document.getElementById("logout");
var logoutButton = document.getElementById("logoutButton");
var submitNameButton = document.getElementById("submitName");
var usernameInput = document.getElementById("username");
var username = '';
var greeting = document.getElementById("greeting");
submitMessageDiv.style.display = "none";
logoutDiv.style.display = "none";
submitNameButton.onclick = function(){
  username = usernameInput.value;
  usernameInput.value = "";

  greeting.innerText = "Hi "+ username + "!";
  loginDiv.style.display = "none";
  submitMessageDiv.style.display = "";
  logoutDiv.style.display = "";
};


logoutButton.onclick = function(){
  username="";
  greeting.innerText = "Hi!";
  loginDiv.style.display = "";
  submitMessageDiv.style.display = "none";
  logoutDiv.style.display = "none";
};
