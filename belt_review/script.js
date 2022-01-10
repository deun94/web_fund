// console.log("hey it'sme!");

function linuxAlert(){
    alert("this game is available on linux");
}

var count = 0;

function addToCart(){
    //click the button, console.log("clicked here")
    count ++
    var cartCount =document.getElementById("cartcount");
    //querySelector needs the same syntax like #
    cartCount.innerText = count;
}
// add this to all the buy buttons

var imagesChanged = false;
function changeImage(){
    var banner = document.getElecmentbyId("banner");
    if(imageChanged){
        banner.src = "images/ptjer o,age.png";
    }
    else{
        banner.src = "images/pixel-ninjas-2.png";
    }

    imagesChanged = !imagesChanged;
    
    // changes images sources
}