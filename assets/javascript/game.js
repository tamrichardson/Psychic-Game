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
var maxWrong = 15;
var mistakes = 0;
var guessed = [];
var wordStatus = null;

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
    guessedWord();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
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

document.getElementById("maxWrong").innerHTML = maxWrong;


randomTitle();
generateButtons();
guessedWord();



