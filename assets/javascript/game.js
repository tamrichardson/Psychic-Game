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

//this will pick a random title to start
function randomTitle() {
  answer = movieNames[Math.floor(Math.random() * movieNames.length)];
  document.getElementById("main-heading");
}

function generateButtons() {
  var buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) =>
        `
    <button
    class="btn btn-sm btn-danger m-1"
    id="` +
        letter +
        `
    onClick="handleGuess("` +
        letter +
        `" )"
    >
      ` +
        letter +
        `
      </button>
  `
    )
    .join(" ");

  document.getElementById("keyboard").innerHTML = buttonsHTML;
}

randomTitle();
generateButtons();

//sets up answerArray to show how many letters are in the title
//using under scores
var answerArray = [];
for (var i = 0; i < movieNames.length; i++) {
  answerArray[i] = "_";
}

// variable to show the number of remaining letters to be guessed
var remainingLetters = movieNames.length;

//    ***** The Main Game Loop *****

//while there are letters left to be guessed
while (remainingLetters > 0) {
  //show player their progress
  alert(answerArray.join(" "));

  //get a guess from the player
  var guess = prompt("Guess a letter or click cancel to quit!");

  //if the guess is blank
  if (guess === null) {
    //exit the game loop
    break;
    //if the guess is more than one letter or no letters
  } else if (guess.length !== 1) {
    //alert them to guess only a single letter
    alert("Please enter a single letter!");
    break;
    //if they have a valid guess
  } else {
    //update the game state with the guess
    for (var j = 0; j < movieNames.length; j++) {
      //if the letter guessed is in the title at that point or index
      if (movieNames[j].includes(guess)) {
        console.log;
      }
    }
  }
  //     ***** end of main game loop ******
}

//let player know the word
alert(answerArray.join(" "));
//congratulate the player
alert("Good job! The answer was " + movieNames);
