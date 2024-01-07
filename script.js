const choiceButtons = document.querySelectorAll('.choice-btn');
const playerSelectionDisplay = document.getElementById('playerSelectionDisplay');
const computerSelectionDisplay = document.getElementById('computerSelectionDisplay');
const playerScoreCounter = document.getElementById('playerScoreCounter');
const computerScoreCounter = document.getElementById('computerScoreCounter');
const roundResult = document.getElementById('roundResult');
const gameResult = document.getElementById('gameResult');
const resetBtn = document.getElementById('resetBtn');
let playerScore = 0;
let computerScore = 0;


// Event listener for Reset Game button
resetBtn.addEventListener('click', resetGame);

function resetGame() {
  playerScore = 0; 
  computerScore = 0;
  playerScoreCounter.innerHTML = "";
  computerScoreCounter.innerHTML = "";
  playerSelectionDisplay.innerHTML = "";
  computerSelectionDisplay.innerHTML = "";
  roundResult.innerHTML = "";
  gameResult.innerHTML = "";
  choiceButtons.forEach(button => {
    button.disabled = false;
  });
  resetBtn.classList.remove('active');
}

function endGame() {
  choiceButtons.forEach(button => {
    button.disabled = true;
  });
  resetBtn.classList.add('active');
}

function game(playerScore, computerScore) {
  let gameWinner;
  const targetScore = 5;

  switch (true) {
    case playerScore >= targetScore:
      roundResult.innerHTML = "";
      gameWinner = "player";
      break;
    case computerScore >= targetScore:
      roundResult.innerHTML = "";
      gameWinner = "computer";
      break;
  }
  if (gameWinner) {
    gameResult.innerHTML = `<span class="pink-text">${gameWinner}</span> won the game!`;
    endGame();
  }
}

function createIcon(iconClass) {
  const icon = document.createElement('i');
  icon.className = iconClass;
  return icon;
}

function updateScoreBoard(roundWinner) {
  let iconClass;
  let winnerIcon;

  switch (roundWinner) {
    case "player":
      playerScore++;
      iconClass = 'fa-solid fa-face-smile';
      winnerIcon = createIcon(iconClass);
      playerScoreCounter.appendChild(winnerIcon);
      break;
    case "computer":
      computerScore++;
      iconClass = 'fa-solid fa-robot';
      winnerIcon = createIcon(iconClass);
      computerScoreCounter.appendChild(winnerIcon);
      break;
    case "tie":
      roundResult.innerHTML = "Tie";
      break;
  }

  if (roundWinner !== "tie") {
    roundResult.innerHTML = `<span class="pink-text">${roundWinner}</span> wins the round!`;
  }
  game(playerScore, computerScore)
}

function playRound(playerSelection) {
  const computerSelection = getComputerSelection();
  displayComputerSelection(computerSelection);
  
  let roundWinner =
    playerSelection === computerSelection
      ? "tie"
      : (playerSelection === "rock" && computerSelection ===    "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ? "player"
      : "computer";
   
   updateScoreBoard(roundWinner);
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


