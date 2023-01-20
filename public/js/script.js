// 
// save text from user input into variable
var text = document.getElementById("userInput").value;

let send = document.getElementById("send");

send.addEventListener("click", function() {
    // send text to server
    socket.emit("send", text);
});

