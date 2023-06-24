//Generates random choice for computer
function getComputerChoice() {
    let rcp = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return rcp[random];
  }
  
  //runs the game between computer choice and player choice
  function game(playSelection, computerSelection) {
    if (playSelection === computerSelection) {
      win.textContent = "Draw";
    } else if (playSelection === "rock") {
      if (computerSelection === "paper") {
        pcScore++;
        win.textContent = `Paper beat Rock`;
      }
      if (computerSelection === "scissors") {
        yourScore++;
        win.textContent = "You beat scissors with rock";
      }
    } else if (playSelection === "paper") {
      if (computerSelection === "scissors") {
        pcScore++;
        win.textContent = "PC got the better over your paper with scissors";
      }
      if (computerSelection === "rock") {
        yourScore++;
        win.textContent = "Your paper covered the rock!";
      }
    } else if (playSelection === "scissors") {
      if (computerSelection === "rock") {
        pcScore++;
        win.textContent = "Your scissors got destroyed by rock";
      }
      if (computerSelection === "paper") {
        yourScore++;
        win.textContent = "You defeated the paper with scissors";
      }
    }
  
    score.textContent = `${yourScore} - ${pcScore}`;
  
    // Check if either player or computer has reached a score of 5
    if (yourScore === 5 || pcScore === 5) {
      // Stop the game
      rockBtn.removeEventListener("click", handleRockClick);
      paperBtn.removeEventListener("click", handlePaperClick);
      scissorsBtn.removeEventListener("click", handleScissorsClick);
      rockImg.removeEventListener("click", handleRockClick);
      paperImg.removeEventListener("click", handlePaperClick);
      scissorsImg.removeEventListener("click", handleScissorsClick);
      btn.style.visibility = 'visible';

      result.textContent = yourScore === 5 ? "CONGRATS! YOU WON THE GAME!" : "PC WON THE GAME! BETTER LUCK NEXT TIME.";
    }
  }
  
  let yourScore = 0;
  let pcScore = 0;
  let rockBtn = document.getElementById("rck");
  let paperBtn = document.getElementById("ppr");
  let scissorsBtn = document.getElementById("scis");
  let rockImg = document.getElementById("rockImg");
  let paperImg = document.getElementById("paperImg");
  let scissorsImg = document.getElementById("scissorsImg")
  let score = document.getElementById("score");
  let win = document.getElementById("win");
  let result = document.getElementById("result");

  
  function handleRockClick() {
    game("rock", getComputerChoice());
  }
  
  function handlePaperClick() {
    game("paper", getComputerChoice());
  }
  
  function handleScissorsClick() {
    game("scissors", getComputerChoice());
  }
  
//creating play again button
  const btn = document.createElement("button");
  const buttonTxt = document.createTextNode("Play Again?");
  const scoreBoard = document.getElementById("scoreBoard");
  btn.classList.add("playAgain");
  btn.appendChild(buttonTxt);
  scoreBoard.appendChild(btn);

  

//activates the eventlisteners
  function runGame(){
    rockBtn.addEventListener("click", handleRockClick);
    paperBtn.addEventListener("click", handlePaperClick);
    scissorsBtn.addEventListener("click", handleScissorsClick);
    rockImg.addEventListener("click", handleRockClick);
    paperImg.addEventListener("click", handlePaperClick);
    scissorsImg.addEventListener("click", handleScissorsClick);
  }
  runGame();
  btn.style.visibility = 'hidden';

  btn.addEventListener("click", playAgainn)

  //play again fuction
  function playAgainn(){
    win.textContent = "";
    result.textContent = ""
    yourScore = 0;
    pcScore = 0;
    score.textContent = `${yourScore} - ${pcScore}`;
    runGame();
    btn.style.visibility = 'hidden';
  }