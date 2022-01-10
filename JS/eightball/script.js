var answer = document.getElementById("answer");
// same name cuz why change the name
var conch = document.getElementbyId("conch")
var input = document.getElementbyId("input")
function roll8Ball(){
    // var lifeAnswers = [
    //     "It is certain.",
    //     "It is decidedly so.",
    //     "Without a doubt.",
    //     "Yes-Definitely.",
    //     "you may rely on it.",
    //     "as I see it, yes.",
    //     "Most likely.",
    //     "Outlook good.",
    //     "yes.",
    // "Signs point to yes.",
    // "Reply hazy, try again.",
    // "Ask again later.",
    // "Better not tell you now.",
    // "Cannot predict now.",
    // "Concentrate and ask again.",
    // "Don't count on it.",
    // "My reply is no.",
    // "My sources say no.",
    // "Outlook not so good.",
    // "Very doubtful."

    // ]

    // var roll = Math.floor(Math.random() * lifeAnswers.length);
    // // console.log(lifesAnswers[roll]);
    // answer.innerText = lifeAnswers[roll];
    // //changes the word.
    if(input.value.length > 0){
        conch.src="img/gif";
        answer.innerText = "hm.........";
        setTimeout(finishAnswer, 2500);
    }
    else{
        alert("you gotta write something...");
    }
}
//only upon input
function finishAnswer(){
    // console.log("done");
    conch.src="img/jpg";
    input.value = "";
    var lifeAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes-Definitely.",
        "you may rely on it.",
        "as I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];

    var roll = Math.floor(Math.random() * lifeAnswers.length);
    // console.log(lifesAnswers[roll]);
    answer.innerText = lifeAnswers[roll];
    // //changes the word.
}


// setTimeout()

//animate the gif
//change answer to say" calculating"
//wait ~2seconds
//change img back to still
//post answer