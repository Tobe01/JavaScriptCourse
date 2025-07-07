// Rock Paper Scissors Game
 
 window.addEventListener('load', function (){

  const savedScore = JSON.parse(localStorage.getItem('saveScore'));
  if (savedScore) {
    showScores = savedScore;

    
    let show = document.querySelector('.js-result');

    if (show) {
      show.innerHTML = `Wins: ${showScores.Wins}, Losses: ${showScores.Losses}, Ties: ${showScores.Ties}`;
    }
  }

 })

 
document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r' || event.key === 'R'){
      playerMove('Rock');
    } else if (event.key === 'p' || event.key === 'P'){
      playerMove('Paper');
    } else if (event.key ==='s' || event.key === 'S'){
      playerMove('Scissors');
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  let rock = document.querySelector('.js-rock');
  let paper = document.querySelector('.js-paper');
  let scissors = document.querySelector('.js-scissors');

  if (rock) {
    rock.addEventListener('click', function(){
      playerMove('Rock');
    });
  }

  if (paper) {
    paper.addEventListener('click', function(){
      playerMove('Paper');
    });
  }

  if (scissors) {
    scissors.addEventListener('click', function(){
      playerMove('Scissors');
    });
  }
});


function triggerAutoPlay(){
  let autoPlay = document.querySelector('.js-autoPlay');

  if(autoPlay.innerHTML === 'Auto Play'){
    autoPlay.innerHTML = 'Stop Auto Play';
  } else {
    autoPlay.innerHTML = 'Auto Play'
  };
}


document.addEventListener('DOMContentLoaded', function(){

let playClick = document.querySelector('.js-autoPlay');

  if(playClick){
      playClick.addEventListener('click', function(){
      triggerAutoPlay();
  })
  };
})


// Rock Paper Scissors Reset Score
document.addEventListener('DOMContentLoaded', () => {
  let resetButton = document.querySelector('.js-reset-btn')
  resetButton.addEventListener('click', () => {
    if(resetButton){
      resetScore();
    }
  })
})


// Shipping Orders

addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      calculateCost();
    }
});

// Digital ScoreBoard Game

document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector('.js-player1');
  const element2 = document.querySelector('.js-player2');
  const resetButton = document.querySelector('.js-resetScore');
  
  if(element){
    element.addEventListener('click', () => {
       player1();
    })
  };

  if(element2){
    element2.addEventListener('click', () => {
       player2();
    })
  }


  if(resetButton){
    resetButton.addEventListener('click', () => {
        Reset();
    })
  }
});


// Calculator

addEventListener('onkeydown', function(event){
  if(event.key === 'Enter') {
      randomNumber = eval(randomNumber);
      updateDisplay();
  }
});

