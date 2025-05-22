let random = Math.floor(Math.random() * 100 + 1);
//console.log(random);
const guess = document.querySelector('#guess');
const guessField = document.querySelector('#guessField');
const subt = document.querySelector('#subt');
let preguess = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let previousguess = [];
let gameplay = 1;
let numberofattempt = 10;
let display=document.createElement('p');
if (gameplay) {
  subt.addEventListener('click', (a) => {
    a.preventDefault();
    const guessvalue = parseInt(guessField.value);
    validate(guessvalue);
    
  });
}
function validate(guessvalue) {
  if (guessvalue < 1 || guessvalue > 100) {
    alert('enter a valid number');
    return;
  }
  if (numberofattempt < 1) {
    alert('your attempt is empty');
    endgame();
    return;
  }
  previousguess.push(guessvalue);
  preguess.textContent = `Previous guesses: ${previousguess.join(', ')}`;
  numberofattempt = numberofattempt - 1;
  lastResult.textContent = numberofattempt;
  if (random === guessvalue) {
    lastResult.textContent = `GAME IS OVER RANDOM NUMBER IS ${random}`;
    restart();
  } else if (guessvalue < random) {
    lowOrHi.textContent = 'low';
  } else if (guessvalue > random) {
    lowOrHi.textContent = 'high';
  }
}
function endgame() {
display.textContent = `GAME IS OVER RANDOM NUMBER IS ${random}`;

lastResult.appendChild(display);
  restart();
}
function restart() {
  previousguess = [];
  numberofattempt = 11;
  lowOrHi.textContent='start new game'
  

  
}
