const choiceButtons = document.querySelectorAll('.choice-btn');
const playerSelectionDisplay = document.getElementById('playerSelectionDisplay');
const computerSelectionDisplay = document.getElementById('computerSelectionDisplay');


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

function playRound(playerSelection) {
  const computerSelection = getComputerSelection();
  displayComputerSelection(computerSelection);
  
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

// Functionality to display Player and Computer Selections
function displayPlayerSelection(playerSelection) {
  playerSelectionDisplay.innerHTML = `<i class="fa-regular fa-hand-${playerSelection} fa-4x"></i>`;
}

function displayComputerSelection(computerSelection) {
  computerSelectionDisplay.innerHTML = `<i class="fa-regular fa-hand-${computerSelection} fa-4x"></i>`;
}

// Event listener for player choice buttons
choiceButtons.forEach(choice => {
  choice.addEventListener('click', function() {
    const playerSelection = choice.name;
    displayPlayerSelection(playerSelection);
    playRound(playerSelection);
  })
})

// Generate random computer selection
function getComputerSelection() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)]; 
}

// game();
