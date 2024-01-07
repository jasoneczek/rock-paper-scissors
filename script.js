let playerScore = 0;
let computerScore = 0;

function endGame() {
  if (playerScore === 5) {
    console.log("Player wins the game.")
  } else if (computerScore === 5) {
    console.log("Computer wins the game.")
  }

  const restart = confirm("Restart game?");
  if (restart) {
    playerScore = 0;
    computerScore = 0;
    game();
  } else {
    console.log("Game over.");
  }
}

function game() {
  while (playerScore < 5 && computerScore < 5) {
    const playerSelection = prompt("Paper, Rock, or Scissors?").toLowerCase();
    const computerSelection = getComputerSelection();
    console.log(`Player selection: ${playerSelection}`);
    console.log(`Computer selection: ${computerSelection}`);

    let roundWinner = playRound(playerSelection, computerSelection);
    console.log(`Round winner: ${roundWinner}`);

    if (roundWinner === "player") {
      playerScore++;
    } else if (roundWinner === "computer") {
      computerScore++;
    }

    console.log(`Player score: ${playerScore}`)
    console.log(`Computer score: ${computerScore}`)
  }

  endGame();
}

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection ===    "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "player"
  } else {
    return "computer"
  }
}

function getComputerSelection() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)]; 
}

game();
