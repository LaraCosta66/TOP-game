// global
let playerScore = 0;
let computerScore = 0;
let roundResult;

// array
const optionsArray = ["paper", "scissors", "rock"];

//buttons
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", () => playRound("rock"));
btnPaper.addEventListener("click", () => playRound("paper"));
btnScissors.addEventListener("click", () => playRound("scissors"));

// div
const computerChoice = document.querySelector("#computer");
const playerChoice = document.querySelector("#player");
const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");

function getComputerChoice() {
  const randomChoice =
    optionsArray[Math.floor(optionsArray.length * Math.random())];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  viewChoices(playerSelection, computerSelection)
  if (playerSelection === computerSelection) {
    roundResult = "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    roundResult = "Player wins";
    playerScore++;
  } else {
    roundResult = "Computer wins";
    computerScore++;
  }
  if (playerScore === 5) {
    resultDiv.textContent = "Player wins the game!";
    disableButtons();
  } else if (computerScore === 5) {
    resultDiv.textContent = "Computer wins the game!";
    disableButtons();
  }
  resultDiv.textContent = `Round result: ${roundResult}`;
  scoreDiv.textContent = `Score: You ${playerScore} - ${computerScore} Computer`;
}
function viewChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'rock':
      player.textContent = '👊'
      break
    case 'paper':
      player.textContent = '🖐️'
      break
    case 'scissors':
      player.textContent = '🖖'
      break
  }

  switch (computerSelection) {
    case 'rock':
      computer.textContent = '👊'
      break
    case 'paper':
      computer.textContent = '🖐️'
      break
    case 'scissors':
      computer.textContent = '🖖'
      break
  }
}
function disableButtons() {
  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;
}
