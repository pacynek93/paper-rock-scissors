'use strict'

//variables

var humanScore = 0;
var computerScore = 0;
var randomNum;
var disabled = false;

var playerChoice;
var computer;
var say = "You chose " + playerChoice + ". Computer chose" + computer;
var win = "You Won !"
var lose = "You Lost !"
var tie = "You Tied with computer !"

var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var picks = document.getElementsByClassName('picks');
var output = document.getElementById('output');
var myChoice = document.getElementById("myChoice"); 
var cpuChoice = document.getElementById("cpuChoice");
var verdict = document.getElementById("verdict");
var hScore = document.getElementById('humanScore');
var cScore = document.getElementById('computerScore');

var choices = [
    'Rock', 'Paper', 'Scissors'
];
/*
for (var i = 0; i < picks.length; i++) {
    picks[i].addEventListener('click', function() {
        if (disabled) {
            return;
        }
        
        var choice = this.getAttribute('choice');
        myChoice.innerHTML = "You choose " + choices[choice];
        checkComputer();
        compare();
        endGameResult();
    });
}
*/
rock.addEventListener('click', function() {
    if (disabled) {
        return;
    }
    playerChoice = 0;
    myChoice.innerHTML = "You choose Rock";
    checkComputer();
    compare();
    endGameResult();
});                    

paper.addEventListener('click', function(){
    if (disabled) {
        return;
    }
  playerChoice = 1;
  myChoice.innerHHTML = "You choose Paper";
  checkComputer();
  compare();
  endGameResult();
});

scissors.addEventListener('click', function(){
    if (disabled) {
        return;
    }
  playerChoice = 2;
  myChoice.innerHTML = "You choose Scissors";
  checkComputer();
  compare();
  endGameResult();
});

//Computer Choice

function checkComputer(){
  randomNum = Math.floor(Math.random() * 3 );
  
  if (randomNum === 0) {
    computer = 'rock';
  } else if (randomNum === 1) {
    computer = 'paper';
  } else {
    computer = 'scissors';
  }
  console.log('computer choose' + computer);
}


// Outcomes

function resultsTie () {
  verdict.innerHTML = tie;
}

function resultsWinner () {
  humanScore++;
  hScore.innerHTML = humanScore;
  verdict.innerHTML = win;
}

function resultsLoser () {
  computerScore++;
  cScore.innerHTML = computerScore;
  verdict.innerHTML = lose;
  
}

//comparing player with computer

function compare() {
  // user chooses rock
  
  if (playerChoice === randomNum) {
    resultsTie();
  } else if (
    (playerChoice === 0 && randomNum === 1)
    ||
    (playerChoice === 1 && randomNum === 2)
    ||
    (playerChoice === 2 && randomNum === 0)
  ) {
    resultsLoser();
  } else {
    resultsWinner();
  }

  cpuChoice.innerHTML = "Computer chose " + computer;
}

var winner = compare(checkComputer ,playerChoice)

document.getElementById('humanScore').innerHTML = humanScore;
document.getElementById('computerScore').innerHTML = computerScore;


//reset game

function reset() {
  humanScore = 0;
  computerScore = 0;
  document.getElementById('humanScore').innerHTML = 0;
  document.getElementById('computerScore').innerHTML = 0;
    disabled = false;
}


var buttonEnd = document.getElementById('endButton');

buttonEnd.addEventListener('click', function() {
  reset();
  howManyRounds();
  endGameResult();
});



var maxRounds;

function howManyRounds () {
  maxRounds = window.prompt('Jaka liczba rund ma kończyć gre?');
  roundsCount.innerHTML = 'liczba rund do rozegrania to: </br>' + maxRounds;
}

function endGameResult () {
    if (humanScore == maxRounds){
        alert('Wygrałeś, koniec gry!!');
        disabled = true;
    } else if (computerScore == maxRounds ){
        alert('Przegrałeś, koniec gry!!');
        disabled = true;
    }
}