// Arrays and Variables for holding data
var wordOptions = ["istabul", "paris", "new york", "san torini", "los angeles"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// Functions
function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    // Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // Populate blanks and successes with right numbers of blanks
    for (var i=0; i < numBlanks; i++){
        blanksAndSuccesses.push("_");
    }

    // Change html to document round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;



    // Testing
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);

}

function checkLetters(letter){
    // check if letter exists in code at all
    var isLetterInWord = false;


    for (var i=0; i < numBlanks; i++){
        if(selectedWord[i] == letter){
            isLetterInWord = true;
            alert("letter is found");
        }
    }

    //  check where in the word the letter exists, then populate our blanks and successes array
    if(isLetterInWord) {
        for(var i=0; i < numBlanks; i++){
            if (selectedWord[i] == letter){
                blanksAndSuccesses[i] = letter;
            }
        }
    }
//    letter wasnt found
    else {
       wrongLetters.push(letter);
       guessesLeft--
   }

//    testing and debugging
console.log(blanksAndSuccesses);


}

function roundComplete (){
console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left " + guessesLeft);

// update the html to reflect the most recent count stats
document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

// Check if user won
if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
    winCount++;
    alert("You Win!");

    // update the win counter in the html
    document.getElementById("winCounter").innerHTML = winCount;
    startGame();
}

// Check if user lost
else if (guessesLeft == 0) {
    lossCount++;
    alert("You Lost!");

    // update html
    document.getElementById("lossCounter").innerHTML = lossCount;
    startGame();
}

}


// MAIN PROCESS
// Initiates the code the first time
startGame()



// Register Keyclicks
document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    
    roundComplete();
    // Testing/Debugging
    console.log(letterGuessed);

}

