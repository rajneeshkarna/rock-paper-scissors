function getComputerChoice(computerChoice){
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
  console.log(computerChoice);
}
getComputerChoice();

function getHumanChoice(humanChoice){
  humanChoice = prompt('What would you like to pick: Rock, Paper or Scissors?').toLowerCase();
  console.log(humanChoice);
}

getHumanChoice();