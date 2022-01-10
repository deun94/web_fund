function removeCookie(element){
    var element = document.getElementById("cookiebox");
    element.remove();
}

function emptyCart(){
    alert("Your Cart is Empty!");
}

function changePic(){
    var one = document.getElementById("one");
    one.src ="images/succulents-2.jpg";
}

function changeBack(){
    var one = document.getElementById("one");
    one.src ="images/succulents-1.jpg";
}