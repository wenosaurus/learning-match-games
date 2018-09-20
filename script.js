// OPTION ARRAY

var levelOneShapes = ['circle', 'triangle', 'square'];
var levelTwoShapes = ['heart', 'diamond', 'star'];
var levelThreeShapes = ['crescent', 'pentagon', 'octagon'];
var currentArray = levelOneShapes;
var lastPlayed;
var correctAnswer = 0;

// RESULT MESSAGE

var result = document.getElementById("result");
var win = document.getElementById("winMessage");
var winButton = document.getElementById("winButton");

// AGE GROUP

var age = document.getElementById("chooseAge");

// MATCH BOARD

var optionMatch = document.getElementById('itemToMatch');
var gameBoardMatch = document.getElementById('gameBoardMatch');

// OPTION BOARD

var optionOne = document.getElementById('0');
var optionTwo = document.getElementById('1');
var optionThree = document.getElementById('2');
var gameBoardOption = document.getElementById('gameBoardOption');
var beginnerButton = document.getElementById("beginngerButton");
var advancedButton = document.getElementById("advancedButton");

// START CHOOSE LEVEL - BEGINNER

beginngerButton.addEventListener('click',myLevelBeginner);
function myLevelBeginner() {
    gameBoardMatch.removeAttribute('id');
    gameBoardOption.removeAttribute('id');
    beginnerButton.setAttribute('id', 'beginnerButtonGone');
    advancedButton.setAttribute('id', 'advancedButtonGone');
    age.innerHTML = "Age 0-2";
};

// START CHOOSE LEVEL - ADVANCE

advancedButton.addEventListener('click',myLevelAdvance);
function myLevelAdvance() {
    gameBoardMatch.removeAttribute('id');
    gameBoardOption.removeAttribute('id');
    correctAnswer = 0;
    currentArray = levelThreeShapes;
    currentButton = nextButtonThree;
    optionMatch.setAttribute('src', './images/crescent.png');
    optionOne.setAttribute('src', './images/crescent.png');
    optionTwo.setAttribute('src', './images/pentagon.png');
    optionThree.setAttribute('src', './images/octagon.png');
    beginnerButton.setAttribute('id', 'beginnerButtonGone');
    advancedButton.setAttribute('id', 'advancedButtonGone');
    age.innerHTML = "Age 2-4";
};

// NEXT LEVEL

var nextButton = document.getElementById("nextLevel");
var currentButton = nextButton;
nextButton.addEventListener('click',myNextEvent);
function myNextEvent() {
    result.innerHTML = "Match the Shape";
    currentButton.setAttribute('id', 'nextLevel');
    if (lastPlayed === 'circle'){
        optionMatch.setAttribute('src', './images/triangle.png');
        correctAnswer = 1;
    } else if (lastPlayed === 'triangle'){
        optionMatch.setAttribute('src', './images/square.png');
        correctAnswer = 2;
    } else {
        alert("Level 2");
        correctAnswer = 0;
        currentArray = levelTwoShapes;
        currentButton = nextButtonTwo;
        optionMatch.setAttribute('src', './images/heart.png');
        optionOne.setAttribute('src', './images/heart.png');
        optionTwo.setAttribute('src', './images/diamond.png');
        optionThree.setAttribute('src', './images/star.png');
    }

};

// NEXT LEVEL 2

var nextButtonTwo = document.getElementById("nextLevelTwo");
nextButtonTwo.addEventListener('click',myNextEventTwo);
function myNextEventTwo() {
    result.innerHTML = "Match the Shape";
    currentButton.setAttribute('id', 'nextLevelTwo');
    if (lastPlayed === 'heart'){
        optionMatch.setAttribute('src', './images/diamond.png');
        correctAnswer = 1;
    } else if (lastPlayed === 'diamond'){
        optionMatch.setAttribute('src', './images/star.png');
        correctAnswer = 2;
    } else {
        alert("Level 3");
        correctAnswer = 0;
        currentArray = levelThreeShapes;
        currentButton = nextButtonThree;
        optionMatch.setAttribute('src', './images/crescent.png');
        optionOne.setAttribute('src', './images/crescent.png');
        optionTwo.setAttribute('src', './images/pentagon.png');
        optionThree.setAttribute('src', './images/octagon.png');
    }
};

// NEXT LEVEL 3

var nextButtonThree = document.getElementById("nextLevelThree");
nextButtonThree.addEventListener('click',myNextEventThree);
function myNextEventThree() {
    result.innerHTML = "Match the Shape";
    currentButton.setAttribute('id', 'nextLevelThree');
    if (lastPlayed === 'crescent'){
        optionMatch.setAttribute('src', './images/pentagon.png');
        correctAnswer = 1;
    } else if (lastPlayed === 'pentagon'){
    optionMatch.setAttribute('src', './images/octagon.png');
    correctAnswer = 2;
    } else {
        alert("Yay your baby is a genius!");
        correctAnswer = 0;
        gameBoardMatch.setAttribute('id', 'gameBoardMatch');
        gameBoardOption.setAttribute('id', 'gameBoardOption');
        win.innerHTML = "You Won!";
        winButton.removeAttribute('id');
    }
};

// RESULT

var optionButtons = document.getElementsByClassName("optionButton");
for (var i=0; i < optionButtons.length; i++) {
    optionButtons[i].addEventListener('click',myClickEvent);
};

function myClickEvent(event) {
    var clickedButton = parseInt(event.target.id);
    if (correctAnswer === clickedButton) {
        result.innerHTML = "Yes!";
        currentButton.removeAttribute('id');
        play();
        lastPlayed = currentArray[clickedButton];
    } else {
        result.innerHTML = "No!";
    }
};

// PLAY AUDIO

function play(){
    var audio = document.getElementById("audio");
    audio.play();
};

// REFRESH

function myFunction() {
    location.reload();
}