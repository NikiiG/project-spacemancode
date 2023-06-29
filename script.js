/*----constants-----*/
const myWords = ["India", "Argentina", "Brazil","Spain","France"];

/*----- state variables -----*/
let player;
let lives;
let word;
let start;

/*----- cached elements  -----*/
const letters = document.querySelector(".letters");
const guessBoard = document.querySelector(".guessboard");
const btnStart = document.getElementById("start");
const btnReset = document.getElementById("reset");
const messageDiv = document.getElementById("message");
const image = document.querySelector(".image");

/*----- event listeners -----*/
btnStart.addEventListener("click", startGame);
btnReset.addEventListener("click", handleReset);

init();

function init() {
    lives = 10;
    word = "";
    start = false;
    buildKeyboard();
}

function handleReset() {
    {
        lives = 10;
        showLives();
        startGame();
        clearKeyBoard();
        buildKeyboard();
        document.getElementById("spaceImage").src = "https://t4.ftcdn.net/jpg/01/79/97/33/360_F_179973328_WmTgchiYSNEUWrGggispWfYdT2xLDhbZ.jpg";
    }
}

function getWord() {
    let index = Math.floor(Math.random() * myWords.length);
    return myWords[index];
}

function resetBoard() {
    guessBoard.innerHTML = "";
}

function startGame() {
    word = getWord();
    resetBoard();
    buildBoard(word);
    start = true;
};

function buildBoard(word) {
    for (i = 0; i < word.length; i++) {
        let div = document.createElement("div");
        div.classList.add("guessWordLetter")
        div.innerText = "_";
        div.myLetter = word[i];
        guessBoard.appendChild(div);
    };
};

function showLives() {
    message.innerHTML = "Guesses Left: " + lives + "<br>Hint:[Countries]<br>";
};

function showMessage(message) {
    console.log(message);
    messageDiv.innerHTML = message;
}

function clearKeyBoard() {
    while (letters.lastElementChild) {
        letters.removeChild(letters.lastElementChild);
    }
}

function lostGame() {
    document.getElementById("spaceImage").src = "images/spaceman.gif";
    showMessage("<span style='color:red;background-color:black;font-size:28px'> LOOSE!</span><br> Word is : " + word);
    start = false;

}

function buildKeyboard() {
    for (let i = 0; i < 26; i++) {
        let alphabet = String.fromCharCode(65 + i);

        let div = document.createElement("div");
        div.classList.add("keyBoardLetter");
        div.innerHTML = alphabet;
        letters.appendChild(div);

        // handler function
        div.addEventListener("click", handler);

        function handler(evt) {
            if (start) {
                div.removeEventListener("click", handler);
                div.classList.add("doneAlphabet");
                console.log(lives);
                let guess = 0;
                let win = false;
                let dashLetters = document.querySelectorAll(".guessWordLetter");

                dashLetters.forEach(function (letter) {

                    if (letter.myLetter.toUpperCase() === alphabet) {
                        letter.innerHTML = alphabet;
                    };

                    if (letter.innerHTML != "_") {
                        guess++;
                    }
                    let letterLeft = dashLetters.length - guess;
                    if (letterLeft < 1) {
                        showMessage("<span style='color:green;background-color:black; font-size:50px;'> WIN !</span>");
                        start = false;
                        win = true;
                    }
                    else {
                        showLives();
                    }
                })
                if (lives <= 0 && !win) {
                    lostGame();
                }
                lives--;

            }
        }
    };
}




