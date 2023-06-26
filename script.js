/*----constants-----*/
const myWords = ["India", "Argentina", "Africa",",America"];

/*----- state variables -----*/
let player = {};

/*----- cached elements  -----*/
const myLives = document.querySelector(".myLives");
const letters = document.querySelector(".letters");
const guessBoard = document.querySelector(".guessboard");
const btnStart = document.querySelector(".mystart");
const playAgainBtn = document.querySelector(".playagain");

/*----- event listeners -----*/

btnStart.addEventListener("click", function() {
    myWords.sort(function() {
     return .5 - Math.random();
    });
    console.log(myWords);
    let theWord = myWords.shift();
    player = theWord.split("");
    buildBoard();
    console.log(player);
  
  });
  
  function buildBoard(){
    player.forEach(function(letter){
      //console.log(letter);
      let div=document.createElement("div");
      div.classList.add("letter2")
      div.innerText="_";
      div.myLetter =letter;
  
      guessBoard.appendChild(div);
    
                  
                  
    });
  };
  