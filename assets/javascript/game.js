//array of movie titles
var movieNames = [
  "pulp fiction",
  "matrix",
  "titanic",
  "jurassic park",
  "scream",
  "empire records",
  "last action hero",
  "12 monkeys",
  "the sandlot",
  "jumanji",
  "edward scissorhands",
  "forrest gump",
  "the sixth sense",
  "fargo",
  "saving private ryan",
  "the usual suspects",
  "reservoir dogs",
  "trainspotting"
];
var startButton = document.getElememtById("startButton");
//this will pick a random title to start
var title = movieNames[Math.floor(Math.random() * movieNames.length)];

//sets up answerArray to show how many letters are in the title
//using under scores
var answerArray = [];
for (var i = 0; i < movieName.length; i++) {
  answerArray[i] = "_";
}

// variable to show the number of remaining letters to be guessed
var remainingLetters = movieName.length;

//    ***** The Main Game Loop *****

//while there are letters left to be guessed
while (remainingLetters > 0) {
  //show player their progress
  alert(answerArray.join(" "));

  //get a guess from the player
  var guess = prompt("Guess a letter or click cancel to quit!");

  //if the guess is blank
  if (guess == null) {
    //exit the game loop
    break;
    //if the guess is more than one letter or no letters
  } else if (guess.lenght !== 1) {
    //alert them to guess only a single letter
    alert("Please enter a single letter!");
    //if they have a valid guess
  } else {
    //update the game state with the guess
    for (var j = 0; j < movieName.length; j++) {
      //if the letter guessed is in the title at that point or index
      if (movieName[j] === guess) {
        //update the answerArray with the letter guessed
        answerArray[j] = guess;
        //subtract one from the remaining letters
        remainingLetters--;
      }
    }
  }
  //     ***** end of main game loop ******
}

//let player know the word
alert(answerArray.join(" "));
//congratulate the player
alert("Good job! The answer was " + movieName);
