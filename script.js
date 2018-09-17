// LEVEL ONE

// OPTION ARRAY

var levelOneShapes = ['circle', 'square', 'triangle'];

var levelOnePlayed = [];

// MATCH BOARD

var optionMatch = document.getElementById('itemToMatch');

optionMatch.innerHTML = levelOneShapes[0];

// OPTION BOARD

var optionOne = document.getElementById('1');

optionOne.innerHTML = levelOneShapes[0];

var optionOne = document.getElementById('2');

optionOne.innerHTML = levelOneShapes[1];

var optionOne = document.getElementById('3');

optionOne.innerHTML = levelOneShapes[2];

var levelOneCorrect = 1;

// CLICK EVENT

var buttons = document.getElementsByClassName("optionButton");

for (var i=0; i < buttons.length; i++) {

    buttons[i].addEventListener('click',myClickEvent);

};

// GAME

function myClickEvent(event) {

    console.log("WHICH BUTTON:", event.target.id);

    var clickedButton = parseInt(event.target.id);

    var result = document.getElementById("result");

    if (levelOneCorrect === clickedButton) {

        result.innerHTML = "Yes!";

        levelOnePlayed.push('circle');

        return true;

    } else {

        result.innerHTML = "No!";

        return false;

    }
};

// LEVEL TWO
