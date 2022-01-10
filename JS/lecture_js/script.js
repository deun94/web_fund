console.log("hey it's me!");

var count=0;
var counter= document.querySelector("#counter");


function clickHeader(element){
    // console.log(element.innerText);
    // element.innerText="you have clicked me!"
    count++;
    // element.remove();
    element.innerText="clicked " + count + " times";
}

function hoverHeader(){
    // console.log("hoverd over again!");
}

function increaseCount(){
    count++;
    // console.log(count);
    counter.innerText= count + " times";
    counter.style.fontSize = count + "px";
}