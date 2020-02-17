//array of movie titles
var movieNames = [
  "matrix",
  "titanic",
  "scream",
  "jumanji",
  "fargo",
  "trainspotting",
  "goodfellas",
  "misery",
  "awakenings",
  "aladdin",
  "unforgiven",
  "philadelphia",
  "clerks",
  "braveheart",
  "seven",
  "casino",
  "gattaca",
  "magnolia"
];


var answer = "";
var maxWrong = 10;
var mistakes = 0;
var guessed = [];
var wordStatus = null;
var wins = 0;
var loses = 0;
var totalWins = 5;
var totalLoses = 5;


//this will pick a random title to start
function randomTitle() {
  answer = movieNames[Math.floor(Math.random() * movieNames.length)];
}

//create keyboard buttons and link letters to buttons
function generateButtons() {
  var buttonsHTML = "abcdefghijklmnopqrstuvwxyz".split("").map((letter) =>
    '<button class="btn btn-sm btn-danger m-1" id="' + letter + '" onClick="console.log(\'' + letter +
    '\');handleGuess(\'' + letter + '\')">'
    + letter + '</button>').join(" ");
  document.getElementById("keyboard").innerHTML = buttonsHTML;
}

//disable buttons after clicked so the cannot be clicked again
function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute("disabled", true);

  if (answer.indexOf(chosenLetter) >= 0) {
    wins++;
    guessedWord();
    checkIfWon();
    updateWins();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    loses++;
    updateMistakes();
    checkIfLost();
    updateLoses();
  }
}
//this function is checking to see if the word guessed matches the answer. if it does a congratulation message will be displayed in place of the keyboard
function checkIfWon() {
  if (wordStatus === answer) {
    document.getElementById("keyboard").innerHTML = "CONGRATULATIONS!!!!";
  }
}


//this function is checking to see if the number of mistakes is equal to the number of alotted incorrect choices. it is alos displaying a you lost message in place of the keyboard and the correct answer in place of the word to be guessed area.
function checkIfLost() {
  if (mistakes === maxWrong) {
    document.getElementById("wordSpotlight").innerHTML = "THE ANSWER WAS: " + answer;
    document.getElementById("keyboard").innerHTML = "YOU LOST TRY AGAIN!!!!";
  }



}
//check if the letter exist in the title
function guessedWord() {
  wordStatus = answer.split("").map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");
  document.getElementById("wordSpotlight").innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById("mistakes").innerHTML = mistakes;
}

//this function resets the game
function newGame() {
  mistakes = 0;
  guessed = [];

  //theses request a new random title, updates the to be guessed dashes, resets mistake counter and generates a new keyboard so buttons clicked are no longer diabled
  randomTitle();
  guessedWord();
  updateMistakes();
  generateButtons();
}


document.getElementById("maxWrong").innerHTML = maxWrong;


randomTitle();
generateButtons();
guessedWord();



