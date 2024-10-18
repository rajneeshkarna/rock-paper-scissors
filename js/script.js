function getComputerChoice(){
  const randomNumber = Math.floor(Math.random() * 3);
  if(randomNumber === 0){
    return 'rock';
  }
  else if(randomNumber === 1){
    return 'paper';
  }
  else{
    return 'scissors';
  }
}

function getHumanChoice(){
  const humanChoice = prompt('What would you like to pick: Rock, Paper or Scissors?');
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

  humanChoice = humanChoice.toLowerCase();

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
  for(let i = 0; i < 5; i++){
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
  }
  if(computerScore > humanScore){
    console.log(`Computer won by ${computerScore - humanScore} round.`);
  }
  else if(humanScore > computerScore) {
    console.log(`You won by ${humanScore - computerScore} round.`);
  }
  else {
    console.log('It\'s a tie!');
  }
}

playGame();