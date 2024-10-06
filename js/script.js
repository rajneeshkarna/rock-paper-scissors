function computerChoice(computerChoice){
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
computerChoice();