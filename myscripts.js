function getComputerChoice () {
    let rcp = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random()*3)
    return rcp[random]
}
function game(playSelection, computerSelection) {
 if(playSelection == computerSelection) {
    return "Its a draw."
 }
 else if(playSelection == "rock") {
    if(computerSelection == "paper")  {
        pcScore++;
        return "+1 point for PC"
    }
    if(computerSelection == "scissors") {
        yourScore++ ;

        return "+1 point for you";
    }
}
else if(playSelection == "paper") {
    if(computerSelection == "scissors") {
        pcScore++;

        return "+1 point for PC";
    }
    if(computerSelection == "rock"){
        yourScore++

        return "+1 point for you"
}
    } 
else if(playSelection == "scissors") {
    if(computerSelection == "paper"){
        pcScore++;

        return "+1 point for PC";
    } 
    if(computerSelection == "rock") {
        yourScore++;
        return "+1 point for you";
    }
}
else {
    return "incorrect tool"
}
}

let yourScore = 0;
let pcScore = 0;
while(yourScore < 5 && pcScore < 5) {
    let playSelection = prompt("message").toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(game(playSelection, computerSelection));


}
console.log(`Your score: ${yourScore}`)
console.log(`PC score: ${pcScore}`)

