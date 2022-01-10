console.log("page loaded...");

var username = document.querySelector(".username");
var request = document.querySelector("#request");
var connect = document.querySelector("#connect");

function changeName(){
    username.innerText = "Michael Cooper";
    // document.getElementsByClassName = "username";
}

function acceptRequest(element){
    var element = document.querySelector(".card-list-item")
    element.remove();
    request.innerText--;
    connect.innerText++;
}

function denyRequest(element){
    var element = document.querySelector(".card-list-item")
    element.remove();
    request.innerText--;
}