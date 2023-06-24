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
        win.textContent = "VADER WIN";
      }
      if (computerSelection === "scissors") {
        yourScore++;
        win.textContent = "YOU WIN";
      }
    } else if (playSelection === "paper") {
      if (computerSelection === "scissors") {
        pcScore++;
        win.textContent = "VADER WIN";
      }
      if (computerSelection === "rock") {
        yourScore++;
        win.textContent = "YOU WIN";
      }
    } else if (playSelection === "scissors") {
      if (computerSelection === "paper") {
        pcScore++;
        win.textContent = "VADER WIN";
      }
      if (computerSelection === "rock") {
        yourScore++;
        win.textContent = "YOU WIN";
      }
    }
  
    score.textContent = `${yourScore} - ${pcScore}`;
  
    // Check if either player or computer has reached a score of 5
    if (yourScore === 5 || pcScore === 5) {
      // Stop the game
      rock.removeEventListener("click", handleRockClick);
      paper.removeEventListener("click", handlePaperClick);
      scissors.removeEventListener("click", handleScissorsClick);
      result.textContent = yourScore === 5 ? "YOU WON THE GAME!" : "VADER WON THE GAME!";
    }
  }
  
  let yourScore = 0;
  let pcScore = 0;
  
  let rock = document.getElementById("rck");
  let paper = document.getElementById("ppr");
  let scissors = document.getElementById("scis");
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
  

  //listens for players choice
  rock.addEventListener("click", handleRockClick);
  paper.addEventListener("click", handlePaperClick);
  scissors.addEventListener("click", handleScissorsClick);
  