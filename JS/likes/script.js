var count1 = 0;
var count2 = 0;
var count3 = 0;

var counter1 = document.getElementById("counter1");
var counter2 = document.getElementById("counter2");
var counter3 = document.getElementById("counter3");

//array method for loop!
function countUp(bnum){
    // count++;
    if (bnum == 1){
        count1++;
        counter1.innerText = count1 + " like(s)";
    }
    else if(bnum == 2){
        count2++;
        counter2.innerText = count2 + " like(s)";
    }
    else if(bnum == 3){
        count3++;
        counter3.innerText = count3 + " like(s)";
    }
}

function countDown(bnum){
    if (bnum == 1 && count1>0){
        //how do I set min to 0
        count1--;
        counter1.innerText = count1 + " like(s)";
    }
    else if(bnum == 2 && count2>0){
        count2--;
        counter2.innerText = count2 + " like(s)";
    }
    else if(bnum == 3 && count3>0){
        count3--;
        counter3.innerText = count3 + " like(s)";
    }
}

//are there better options?