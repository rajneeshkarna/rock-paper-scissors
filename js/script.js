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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

  if (computerChoice === 'rock') {
    if(humanChoice === 'rock'){
      result.textContent = 'It\'s a tie!';
    }
    else if(humanChoice === 'paper'){
      result.textContent = 'You win! Paper beats Rock.';
      humanScore++;
    }
    else if(humanChoice === 'scissors'){
      result.textContent = 'You lose! Rock beats Scissors.';
      computerScore++;
    }
  }

  else if(computerChoice === 'paper'){
    if(humanChoice === 'rock'){
      result.textContent = 'You lose! Paper beats Rock.';
      computerScore++;
    }
    else if(humanChoice === 'paper'){
      result.textContent = 'It\'s a tie!';
    }
    else if(humanChoice === 'scissors'){
      result.textContent = 'You win! Scissors beats Paper.';
      humanScore++;
    }
  }

  else if(computerChoice === 'scissors'){
    if(humanChoice === 'rock'){
      result.textContent = 'You win! Rock beats Scissors.';
      humanScore++;
    }
    else if(humanChoice === 'paper'){
      result.textContent = 'You lose! Scissors beats paper.';
      computerScore++;
    }
    else if(humanChoice === 'scissors'){
      result.textContent = 'It\'s a tie!';
    }
  }

  humanScored.textContent = `You score: ${humanScore}`;
  computerScored.textContent = `Computer Score: ${computerScore}`;

  if(computerScore === 5 || humanScore === 5){
    if(computerScore === 5) {
    finalResult.textContent = `You lose the game by ${comuterScore - humanScore} point`;
}
 else {
     finalResult.textContent = `You win the game by ${humanScore - computerScore} point`;
}
  disableButtons();
  }
}

function disableButtons() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

const container = document.querySelector('.container');

const rock = document.createElement('button');
rock.setAttribute('id', 'rock-btn');
rock.textContent = 'Rock';
container.appendChild(rock);
rock.addEventListener('click', () => {
const computerSelection = getComputerChoice();
playRound('rock', computerSelection)
});

const paper = document.createElement('button');
paper.setAttribute('id', 'paper-btn');
paper.textContent = 'Paper';
container.appendChild(paper);
paper.addEventListener('click', () => {
const computerSelection = getComputerChoice();
playRound('paper', computerSelection)
});

const scissors = document.createElement('button');
scissors.setAttribute('id', 'scissors-btn');
scissors.textContent = 'Scissors';
container.appendChild(scissors);
scissors.addEventListener('click', () => {
const computerSelection = getComputerChoice();
playRound('scissors', computerSelection)
});

  const result = document.createElement('div');
  container.appendChild(result);

  const humanScored = document.createElement('p');
  humanScored.id = 'humanScored'
  container.appendChild(humanScored);

  const computerScored = document.createElement('p');
  computerScored.id = 'computerScored'
  container.appendChild(computerScored);

  const finalResult = document.createElement('p');
  container.appendChild(finalResult);