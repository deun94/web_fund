// function logOut(out){
//     document.getElementById("login").innerText = "LogOut";
// }

function logOut(login){
    var login = document.getElementById("login");
    if (login.innerText=="Logout"){
        login.innerText="Login";
    } else{
        login.innerText="Logout";
    }
}

function removeButton(elem){
    var elem = document.getElementById("add");
    elem.remove();
}
//you can use "this" to specify the button instead

// var count = 0; 

// function countLike("likes"){
//     count++;
//     document.getElementbyId("likes").innerText = count + "likes";
// }

// removeButton(elem);