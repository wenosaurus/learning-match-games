// LEVEL ONE

// OPTION ARRAY

var levelOneShapes = ['circle', 'triangle', 'square'];

var levelTwoShapes = ['heart', 'diamond', 'star'];

var levelThreeShapes = ['crescent', 'pentagon', 'octagon'];

var currentArray = levelOneShapes;

var lastPlayed;

// RESULT MESSAGE

var result = document.getElementById("result");

// MATCH BOARD

var optionMatch = document.getElementById('itemToMatch');

var gameBoardMatch = document.getElementById('gameBoardMatch');

var gameBoardOption = document.getElementById('gameBoardOption');

// OPTION BOARD

var optionOne = document.getElementById('0');

var optionTwo = document.getElementById('1');

var optionThree = document.getElementById('2');

var levelOneCorrect = 0;

// START CHOOSE LEVEL - BEGINNER

var beginnerButton = document.getElementById("beginngerButton");

beginngerButton.addEventListener('click',myLevelBeginner);

function myLevelBeginner() {

    console.log('my Level Beginner');

    gameBoardMatch.removeAttribute('id');

    gameBoardOption.removeAttribute('id');

};

// OPTION EVENTS

var optionButtons = document.getElementsByClassName("optionButton");

for (var i=0; i < optionButtons.length; i++) {

    optionButtons[i].addEventListener('click',myClickEvent);

};

// NEXT LEVEL

var nextButton = document.getElementById("nextLevel");

var currentButton = nextButton;

nextButton.addEventListener('click',myNextEvent);

function myNextEvent() {

    console.log('nextevent');

    result.innerHTML = "Match the Shape";

    currentButton.setAttribute('id', 'nextLevel');

    if (lastPlayed === 'circle'){

    optionMatch.setAttribute('src', './images/triangle.png');

    levelOneCorrect = 1;

    } else if (lastPlayed === 'triangle'){

    optionMatch.setAttribute('src', './images/square.png');

    levelOneCorrect = 2;

    } else {
        alert("Level 2");

        levelOneCorrect = 0;

        currentArray = levelTwoShapes;

        currentButton = nextButtonTwo;

        console.log(lastPlayed);

        optionMatch.setAttribute('src', './images/heart.png');

        optionOne.setAttribute('src', './images/heart.png');

        optionTwo.setAttribute('src', './images/diamond.png');

        optionThree.setAttribute('src', './images/star.png');

        console.log(nextButtonTwo);

        console.log(lastPlayed);
    }

};

// NEXT LEVEL 2

var nextButtonTwo = document.getElementById("nextLevelTwo");

nextButtonTwo.addEventListener('click',myNextEventTwo);

function myNextEventTwo() {

    console.log('next event Two');

    result.innerHTML = "Match the Shape";

    currentButton.setAttribute('id', 'nextLevelTwo');

    if (lastPlayed === 'heart'){

    optionMatch.setAttribute('src', './images/diamond.png');

    levelOneCorrect = 1;

    } else if (lastPlayed === 'diamond'){

    optionMatch.setAttribute('src', './images/star.png');

    levelOneCorrect = 2;

    } else {
        alert("Level 3");

        levelOneCorrect = 0;

        currentArray = levelThreeShapes;

        currentButton = nextButtonThree;

        console.log(lastPlayed);

        optionMatch.setAttribute('src', './images/crescent.png');

        optionOne.setAttribute('src', './images/crescent.png');

        optionTwo.setAttribute('src', './images/pentagon.png');

        optionThree.setAttribute('src', './images/octagon.png');

        console.log(nextButtonTwo);

        console.log(lastPlayed);
    }

};

// NEXT LEVEL 3

var nextButtonThree = document.getElementById("nextLevelThree");

nextButtonThree.addEventListener('click',myNextEventThree);

function myNextEventThree() {

    console.log('next event Three');

    result.innerHTML = "Match the Shape";

    currentButton.setAttribute('id', 'nextLevelThree');

    if (lastPlayed === 'crescent'){

    optionMatch.setAttribute('src', './images/pentagon.png');

    levelOneCorrect = 1;

    } else if (lastPlayed === 'pentagon'){

    optionMatch.setAttribute('src', './images/octagon.png');

    levelOneCorrect = 2;

    } else {
        alert("Yay your baby is a genius!");

        levelOneCorrect = 0;

        currentArray = levelThreeShapes;

        currentButton = nextButtonThree;
    }

};

// RESULT

function myClickEvent(event) {

    console.log("WHICH BUTTON:", event.target.id);

    var clickedButton = parseInt(event.target.id);

    if (levelOneCorrect === clickedButton) {

        result.innerHTML = "Yes!";

        currentButton.removeAttribute('id');

        play();
        //lastPlayed = levelOneShapes[clickedButton];

        lastPlayed = currentArray[clickedButton];

        console.log('print lastPlayed: ' + lastPlayed);

        return true;

    } else {

        result.innerHTML = "No!";

    }
};

// PLAY AUDIO

function play(){

    var audio = document.getElementById("audio");

    audio.play();

};