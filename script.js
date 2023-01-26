const optionsArray = ["paper", "scissors", "rock"];
const rounds = 5;
function getComputerChoice() {
  const randomValue = optionsArray[Math.floor(optionsArray.length * Math.random())];
  return randomValue;
}
console.log(getComputerChoice());


function getPlayersChoice(){
  let choice = prompt("Please choose between Paper, Scissors, Rock");
  playerSelection = choice.toLowerCase();
  return playerSelection
}
function playRound(playerSelection, computerSelection) {
  switch (true || false) {
    case playerSelection === "paper" && computerSelection === "rock":
      alert("You Win! Paper beats Rock");
      break;
    case playerSelection === "rock" && computerSelection === "scissors":
      alert("You Win! Rock beats Scissors");
      break;
    case playerSelection === "scissors" && computerSelection === "paper":
      alert("You Win! Scissors beats Paper");
      break;
    case playerSelection === "rock" && computerSelection === "paper":
      alert("You lose! Rock beats Paper");
      break;
    case playerSelection === "paper" && computerSelection === "scissors":
      alert("You lose! Scissors beats Paper");
      break;
    case playerSelection === "scissors" && computerSelection === "rock":
      alert("You lose! Rock beats Scissors");
      break;
   default :
    alert("It's a Tie")
  }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();

function game() {
  for (let i = 0; i < rounds; i++) {
    getComputerChoice();
    getPlayersChoice();
  }
}
console.log(game())