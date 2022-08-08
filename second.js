let vars = {
    firstSelect: "null",
    secondSelect: "null",
    clicks: 0,
    matches: 0,
    curCards: [],
    min: 10
};
let domSelect = {
    cards: document.querySelectorAll(".card"),
    timer: document.getElementById("time-left"),
    matches: document.getElementById("matches"),
    directions: document.getElementById("directions")
};

function shuffleCards () {
    //set imgs to different card ids 
}

function startTimer() {
    console.log("startTimer activated");
    let time = vars.min * 60;
    setInterval(timer, 1000);
    function timer() {
        let minutes = Math.floor(vars.time / 60);
        let seconds = vars.time % 60;
        if (seconds > 10) {
            seconds = "0" + seconds
        };
        domSelect.timer.innerHTML = ("Time left: " + minutes + ":" + seconds);
        vars.time--;
    };
};


clickCard();

function clickCard () {
    domSelect.cards.forEach(function(card) {
        card.addEventListener('click', function() {
            card.classList.toggle('flipped');  //flip cards
            vars.clicks = vars.clicks + 1 //count clicks (clicks +1)
            vars.curCards.push(card.id); //push id of clicked card into curCards array
            //console.log(vars.curCards);
            if (vars.clicks % 2 === 0) { //if clicks %2 set secondSelect
                vars.secondSelect = card.firstElementChild.innerHTML;
                //console.log("second click")
                checkMatch();
            } else {
                vars.firstSelect = card.firstElementChild.innerHTML;
                //console.log("first click")
            };
            //remove event listener for this card??
            //console.log(vars.clicks + " clicks");
            //console.log(vars.firstSelect + " first");
            //console.log(vars.secondSelect + " second");
            //console.log(vars.clicks);
            if (vars.clicks === 1) {startTimer()}; //if clicks === 1, start timer
        });
    });
};

function checkMatch () {
    if (vars.firstSelect === vars.secondSelect) { //if firstSelect === secondSelect update match's +1
        vars.matches = vars.matches + 1;
        domSelect.matches.innerHTML = ("Matches: " + vars.matches);
    } else {
        setTimeout (function () { //on timer (3sec), flip cards back over
            vars.curCards.forEach(function(card) {
                let currentCard = document.getElementById(card);
                currentCard.classList.toggle('flipped');
            })
    }, 2500);
    };
    vars.firstSelect = "null"; // reset firstSelect and secondSelect to "null"
    vars.secondSelect = "null";
    setTimeout(function(){vars.curCards = []}, 2501); //clears current card array after timed flip executes
};

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
