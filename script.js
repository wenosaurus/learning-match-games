// LEVEL ONE

// OPTION ARRAY

var levelOneShapes = ['circle', 'triangle', 'square'];

var lastPlayed;

// RESULT MESSAGE

var result = document.getElementById("result");

// MATCH BOARD

var optionMatch = document.getElementById('itemToMatch');

// OPTION BOARD

var optionOne = document.getElementById('0');

var optionTwo = document.getElementById('1');

var optionThree = document.getElementById('2');

var levelOneCorrect = 0;

// OPTION EVENTS

var optionButtons = document.getElementsByClassName("optionButton");

for (var i=0; i < optionButtons.length; i++) {

    optionButtons[i].addEventListener('click',myClickEvent);

};

// RESULT

function myClickEvent(event) {

    console.log("WHICH BUTTON:", event.target.id);

    var clickedButton = parseInt(event.target.id);

    if (levelOneCorrect === clickedButton) {

        result.innerHTML = "Yes!";

        nextButton.removeAttribute('id');

        lastPlayed = levelOneShapes[clickedButton];

        console.log('print lastPlayed: ' + lastPlayed);

        return true;

    } else {

        result.innerHTML = "No!";

    }
};

// NEXT LEVEL

var nextButton = document.getElementById("nextLevel");

nextButton.addEventListener('click',myNextEvent);

function myNextEvent() {

    console.log('nextevent');

    result.innerHTML = "Match the Shape";

    nextButton.setAttribute('id', 'nextLevel');

    if (lastPlayed === 'circle'){

    optionMatch.setAttribute('src', './images/triangle.png');

    levelOneCorrect = 1;

    } else if (lastPlayed === 'triangle'){

    optionMatch.setAttribute('src', './images/square.png');

    levelOneCorrect = 2;

    } else {
        alert("Yay you're baby is a genius!");
    }

};

