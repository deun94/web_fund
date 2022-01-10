console.log("hi it's me");



function loadingWeather(){
    alert("Loadng Weather Report..");
}

function removeCookie(element){
    var element = document.getElementById("cookie");
    element.remove();
}

// var celcius = document.getElementById();
// var fahrenheit = document.querySelector();

// function convertFtoC(){
//     var fahrenheit = [document.querySelector(".high"), document.querySelector(".low")];
//     console.log(fahrenheit);
// }

// function convertCtoF(){
//     var celcius = [document.querySelector(".high"), document.querySelector(".low")];
//     console.log(celcius);
// }

//want to change highlows 
//on select option



//solution study
function c2f(temp){
    return Math.round((9/5)*temp) + 32;
} 
function f2c(temp){
    return Math.round((temp -32)*(5/9));
} 

// var celsius = (fahrenheit-32)*(5/9);

function convertTemp(element){
    console.log(element.value)
    for(var i=1; i<9; i++) {
        //1thorugh nine since id of temp 1-8
        var tempSpan = document.querySelector("#temp" + i);
        //declsres temp as current
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal) + "°";
        } else {
            tempSpan.innerText = c2f(tempVal) + "°";
        }
    }
}