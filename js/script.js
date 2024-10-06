function getComputerChoice(){
  const randomNumber = Math.floor(Math.random() * 9);
  if(randomNumber <= 2){
    computerChoice = 'rock';
  }
  else if(randomNumber <= 5){
    computerChoice = 'paper';
  }
  else{
    computerChoice = 'scissors';
  }
  return computerChoice;
}

function getHumanChoice(){
  humanChoice = prompt('What would you like to pick: Rock, Paper or Scissors?').toLowerCase();
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(){
  
  getComputerChoice();
  getHumanChoice();

  console.log(`computerChoice = ${computerChoice}`);
  console.log(`humanChoice = ${humanChoice}`);

  if (computerChoice === 'rock') {
    if(humanChoice === 'rock'){
      console.log('It\'s a tie!');
    }
    else if(humanChoice === 'paper'){
      console.log('You won! Paper beats Rock.');
      humanScore++;
    }
    else if(humanChoice === 'scissors'){
      console.log('You lose! Rock beats Scissors.');
      computerScore++;
    }
  }

  else if(computerChoice === 'paper'){
    if(humanChoice === 'rock'){
      console.log('You lose! Paper beats Rock.');
      computerScore++;
    }
    else if(humanChoice === 'paper'){
      console.log('It\'s a tie!');
    }
    else if(humanChoice === 'scissors'){
      console.log('You win! Scissors beats Paper.');
      humanScore++;
    }
  }

  else if(computerChoice === 'scissors'){
    if(humanChoice === 'rock'){
      console.log('You win! Rock beats Scissors.');
      humanScore++;
    }
    else if(humanChoice === 'paper'){
      console.log('You lose! Scissors beats paper.');
      computerScore++;
    }
    else if(humanChoice === 'scissors'){
      console.log('It\'s a tie!');
    }
  }
}

function playGame(){
  for(let i = 0; i <= 4; i++){
    playRound();
  }
  if(computerScore > humanScore){
    console.log(`Computer won by ${computerScore - humanScore} round.`);
  }
  else if(humanScore > computerScore) {
    console.log(`You won by ${humanScore - computerScore} round.`);
  }
}

playGame();