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

window.addEventListener('keydown', function(event){
  if(event.key === 'Enter') {
      randomNumber = eval(randomNumber);
  }
});

document.addEventListener("DOMContentLoaded", () => {

  let btnElement1 = document.querySelector('.js-btn1');
  let btnElement2 = document.querySelector('.js-btn2');
  let btnElement3 = document.querySelector('.js-btn3');
  let btnElement4 = document.querySelector('.js-plus');
  let btnElement5 = document.querySelector('.js-btn4');
  let btnElement6 = document.querySelector('.js-btn5');
  let btnElement7 = document.querySelector('.js-btn6');
  let btnElement8 = document.querySelector('.js-minus');
  let btnElement9 = document.querySelector('.js-btn7');
  let btnElement10 = document.querySelector('.js-btn8');
  let btnElement11 = document.querySelector('.js-btn9');
  let btnElement12 = document.querySelector('.js-multiply');
  let btnElement13 = document.querySelector('.js-btn0');
  let btnElement14 = document.querySelector('.js-btnDot');
  let btnElement15 = document.querySelector('.js-equal');
  let btnElement16 = document.querySelector('.js-divide');
  let btnElement17 = document.querySelector('.js-clear');

  if (btnElement1) {
    btnElement1.addEventListener('click', () => {
      randomNumber += '1';
        updateDisplay();
    });
  }

  if (btnElement2) {
    btnElement2.addEventListener('click', () => {
      randomNumber += '2';
      updateDisplay();
    });
  }

  if (btnElement3) {
    btnElement3.addEventListener('click', () => {
      randomNumber += '3';
      updateDisplay();
    });
  }

  if (btnElement4) {
    btnElement4.addEventListener('click', () => {
      randomNumber += '+';
      updateDisplay();
    });
  }

  if (btnElement5) {
    btnElement5.addEventListener('click', () => {
      randomNumber += '4';
      updateDisplay();
    });
  }

  if (btnElement6) {
    btnElement6.addEventListener('click', () => {
      randomNumber += '5';
      updateDisplay();
    });
  }

  if (btnElement7) {
    btnElement7.addEventListener('click', () => {
      randomNumber += '6';
      updateDisplay();
    });
  }

  if (btnElement8) {
    btnElement8.addEventListener('click', () => {
      randomNumber += '-';
      updateDisplay();
    });
  }

  if (btnElement9) {
    btnElement9.addEventListener('click', () => {
      randomNumber += '7';
      updateDisplay();
    });
  }

  if (btnElement10) {
    btnElement10.addEventListener('click', () => {
      randomNumber += '8';
      updateDisplay();
    });
  }

  if (btnElement11) {
    btnElement11.addEventListener('click', () => {
      randomNumber += '9';
      updateDisplay();
    });
  }

  if (btnElement12) {
    btnElement12.addEventListener('click', () => {
      randomNumber += '*';
      updateDisplay();
    });
  }

  if (btnElement13) {
    btnElement13.addEventListener('click', () => {
      randomNumber += '0';
      updateDisplay();
    });
  }

  if (btnElement14) {
    btnElement14.addEventListener('click', () => {
      randomNumber += '.';
      updateDisplay();
    });
  }

  if (btnElement15) {
    btnElement15.addEventListener('click', () => {
      randomNumber = eval(randomNumber);
      updateDisplay();
    });
  }

  if (btnElement16) {
    btnElement16.addEventListener('click', () => {
      randomNumber += '/';
      updateDisplay();
    });
  }

   if (btnElement17) {
    btnElement17.addEventListener('click', () => {
      randomNumber = ''
      document.querySelector('.js-display').innerText = 0;
    });
  }
})
