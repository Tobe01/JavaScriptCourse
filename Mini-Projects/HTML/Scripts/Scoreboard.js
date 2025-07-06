let score = {
    Kelvin: '',
    Cherry: ''
  };


function player1(){
 
  let display = document.querySelector('.js-display-score');

  let player1 = document.querySelector('.js-player1');

  let player2 = document.querySelector('.js-player2');

  let resetbtn = document.querySelector('.js-resetScore');

  let number = Math.floor(Math.random() * 10) + 1;

  let showScores1 = document.querySelector('.js-player1-point');

  let showScores2 = document.querySelector('.js-player2-point');

  let maximumPoint = 50;


  if (number >= 7 && number < 10){
    score.Kelvin += 5;
    display.innerHTML = `Fantastic!`;
    showScores1.innerHTML = `Kelvin: ${score.Kelvin} Point(s)`;
  } else if (number >= 5 && number < 7){
    score.Kelvin -= 1;
    display.innerHTML = 'Lost a Point';
    showScores1.innerHTML = `Kelvin: ${score.Kelvin} Point(s)`;
  } else if (number >= 1 && number < 5) {
    score.Kelvin = '';
    display.innerHTML = 'No Points'
  }
}
   

function player2(){
 
  let display = document.querySelector('.js-display-score');

  let player1 = document.querySelector('.js-player1');

  let player2 = document.querySelector('.js-player2');

  let resetbtn = document.querySelector('.js-resetScore');

  let number = Math.floor(Math.random() * 10) + 1;

  let showScores1 = document.querySelector('.js-player1-point');

  let showScores2 = document.querySelector('.js-player2-point');


  if (number >= 7 && number < 10){
    score.Cherry += 5;
    display.innerHTML = `Fantastic!`;
    showScores2.innerHTML = `Cherry: ${score.Cherry} Point(s)`;
  } else if (number >= 5  && number < 7){
    score.Cherry -= 1;
    display.innerHTML = 'Lost a Point'
    showScores2.innerHTML = `Cherry: ${score.Cherry} Point(s)`;
  } else if (number >= 1 && number < 5) {
    score.Cherry = '';
    display.innerHTML = 'No Points'
  }

}

function Reset(){

  let display = document.querySelector('.js-display-score');

  let player1 = document.querySelector('.js-player1');

  let player2 = document.querySelector('.js-player2');

  let resetbtn = document.querySelector('.js-resetScore');

  let number = Math.random();

  let showScores1 = document.querySelector('.js-player1-point');

  let showScores2 = document.querySelector('.js-player2-point');

  score = {
    Kelvin: 0,
    Cherry: 0
  };

  display.innerHTML = 'Game reset';

  showScores1.innerHTML = `Kelvin: ${score.Kelvin}`;

  showScores2.innerHTML = `Cherry: ${score.Cherry}`;
}













