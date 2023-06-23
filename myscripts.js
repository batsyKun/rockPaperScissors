function getComputerChoice () {
    let rcp = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random()*3)
    return rcp[random]
}
function game(playSelection, computerSelection) {
 if(playSelection == computerSelection) {
    win.textContent = "Draw"
}
 else if(playSelection == "rock") {
    if(computerSelection == "paper")  {
        pcScore++;
        win.textContent = "ROBOT WIN"

      //  return "w"
    }
    if(computerSelection == "scissors") {
        yourScore++ ;

        win.textContent = "WE WIN"
    }
}
else if(playSelection == "paper") {
    if(computerSelection == "scissors") {
        pcScore++;

        win.textContent = "ROBOT WIN"
    }
    if(computerSelection == "rock"){
        yourScore++

        win.textContent = "WE WIN"
}
    } 
else if(playSelection == "scissors") {
    if(computerSelection == "paper"){
        pcScore++;

        win.textContent = "ROBOT WIN"
    } 
    if(computerSelection == "rock") {
        yourScore++;
        win.textContent = "WE WIN"
    }
}

score.textContent = `${yourScore}  -   ${pcScore}`

}




let yourScore = 0;
let pcScore = 0;
let playSelection = ""

let rock = document.getElementById("rck");
let paper = document.getElementById("ppr");
let scissors = document.getElementById("scis");
let score = document.getElementById("score");
let win = document.getElementById("win");
let result = document.getElementById("result");



    rock.addEventListener("click", () => game("rock", getComputerChoice()));
    paper.addEventListener("click", () => game("paper", getComputerChoice()));
    scissors.addEventListener("click", () => game("scissors", getComputerChoice()));
