console.log("displayong messages");
var xhttp = new XMLHttpRequest();

//xhttp.open("GET", "http://localhost:9998/test/hithere", true);
var getRecentMessages = function(){
  xhttp.open("GET", "http://10.242.125.31:9998/server", true);
  xhttp.send();
};

var join = function(result, next){
  return result + '<p>' + next + '</p>';
}

var process = function(commaSeparatedList){
  return (
    commaSeparatedList.split(',').reduce(join, '')
        );
};
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("messages").innerHTML = process(xhttp.responseText);
       getRecentMessages();
    }
};


getRecentMessages();
