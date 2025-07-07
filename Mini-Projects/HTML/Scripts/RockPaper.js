let showScores = {
    Wins: 0,
    Losses: 0,
    Ties: 0
  }
    
function playerMove(move){

if(move === 'Rock'){
    
    let randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'Rock' 
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'Paper'
    } else if (randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'Scissors'
    }

    let result = '';

    if(computerMove === 'Rock'  && move === 'Rock'){
    result = 'Tie.';
    showScores.Ties += 1;
    } else if (computerMove === 'Paper' && move === 'Rock'){
    result = 'You lose.';
    showScores.Losses += 1;
    } else if (computerMove === 'Scissors' && move === 'Rock'){
    result = 'You win.';
    showScores.Wins += 1;
    }


    showResult();
      
    let results = document.querySelector('.js-scores');

    results.innerHTML = `${result}`;

    showMoves(move, computerMove);


    let score = document.querySelector('.js-result');

  } else if (move === 'Paper'){

    let randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'Rock' 
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'Paper'
    } else if (randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'Scissors'
    }

    let result = '';

    if(computerMove === 'Rock'  && move === 'Paper'){
    result = 'You win.';
    showScores.Wins += 1;
    } else if (computerMove === 'Paper' && move === 'Paper'){
    result = 'Tie.';
    showScores.Ties += 1;
    } else if (computerMove === 'Scissors' && move === 'Paper'){
    result = 'You lose.';
    showScores.Losses += 1;
    }

    showResult();

      
    let results = document.querySelector('.js-scores');

    results.innerHTML = `${result}`;


    showMoves (move, computerMove);

    let score = document.querySelector('.js-result');


} else if (move === 'Scissors'){

  let randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'Rock' 
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'Paper'
    } else if (randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'Scissors'
    }

    let result = '';

    if(computerMove === 'Rock'  && move === 'Scissors'){
    result = 'You lose.';
    showScores.Losses += 1;
    } else if (computerMove === 'Paper' && move === 'Scissors'){
    result = 'You win.';
    showScores.Wins += 1;
    } else if (computerMove === 'Scissors' && move === 'Scissors'){
    result = 'Tie.';
    showScores.Ties += 1;
    }

    showResult();
        
    let results = document.querySelector('.js-scores');

    results.innerHTML = `${result}`;

    showMoves (move, computerMove);
    
    let score = document.querySelector('.js-result');

    }

    localStorage.setItem('saveScore', JSON.stringify(showScores));

  }


// Show Result

function showResult(){

  let show = document.querySelector('.js-result');

  show.innerHTML = `Wins: ${showScores.Wins}, Losses: ${showScores.Losses}, Ties: ${showScores.Ties}`;

}


// Show Moves

function showMoves (move, computerMove){
   let moves = document.querySelector('.js-moves');

   moves.innerHTML = `You <img src="images/${move}-emoji.png"> <img src="images/${computerMove}-emoji.png">Computer`;
}


// Reset Score
  function resetScore(){

  showScores.Losses = 0;
  showScores.Wins = 0;
  showScores.Ties = 0

  let show = document.querySelector('.js-result');

  show.innerHTML = `Wins: ${showScores.Wins}, Losses: ${showScores.Losses}, Ties: ${showScores.Ties}`;

  localStorage.removeItem('saveScore');
  showScores = {
    Wins: 0,
    Losses: 0,
    Ties: 0
  }; 
}