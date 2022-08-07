let vars = {
    firstSelect: "null",
    secondSelect: "null",
    clicks: 0,
    matches: 0
}

function shuffleCards () {
    //set imgs to different card ids 
}

function startTimer () {
    //timer function
}

//on click
function clickCard () {
    //if clicks === 1, startTimer function
    //flip card, show back (cardFlip function)
    //remove event listener for this card
    //count clicks (clicks +1)
    //if clicks !%2 set firstSelect
    //else set secondSelect
}

//if click count %2 then checkMatch function
function checkMatch () {
    //if firstSelect === secondSelect update match's +1
    // reset firstSelect and secondSelect to "null"
    //on timer (3sec), fliop cards back over
}

//if match = 8 run endGame function 
function endGame () {
    //end timer
    //set "you won" message DOM
}

//if timer runs out 
//set "you lost" message DOM 
//remove event listener from all cards... disable on click function??

function startOVer () {
    //event listener to button
}
