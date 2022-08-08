let domSelect = {
    cards: document.querySelectorAll('.card'),
    timer: document.getElementById("time-left"),
    matches: document.getElementById("matches"),
    directions: document.getElementById("directions")
};
let gameVars = {
    matches: 0,
    clicks: 0,
    firstSelect: "null",
    secondSelect: "null",
};
if (gameVars.totalClicks === 1) {
    //start timer
}
    
    domSelect.cards.forEach(function(card) {
        card.addEventListener('click', function() {
            card.classList.toggle('flipped');
            gameVars.currentCards.push(card.id);
           let cardFront = card.firstElementChild.innerHTML; //get inner html of .card-front of clicked card
           gameVars.clicks = gameVars.clicks + 1; //count total clicks
           if (gameVars.firstSelect === "null") { //player selections
             gameVars.firstSelect = cardFront;
           } else if (gameVars.firstSelect !== "null" && gameVars.secondSelect === "null") {
            gameVars.secondSelect = cardFront;
           };
           countMatches();
           flipBack();
           console.log(gameVars.currentCards);
         });
    });

// if the click number gets higher than 2, then set back to 0

function lockCards() {
//remove event listener 
};

function countMatches () {
    if (gameVars.firstSelect !== "null" && gameVars.secondSelect !== "null") { 
        if (gameVars.firstSelect === gameVars.secondSelect) {
            gameVars.matches = gameVars.matches + 1;
            domSelect.matches.innerHTML = ("Matches: " + gameVars.matches);
            //can't click on matched tiles anymore (lockCards())
        }
    gameVars.firstSelect = "null";
    gameVars.secondSelect = "null";
    };
    console.log(gameVars.clicks);
};

function flipBack () {
    if (gameVars.clicks === 2 && gameVars.firstSelect !== gameVars.secondSelect) {
        setTimeout(function () {
            gameVars.currentCards.forEach(function (current) {
                current.classList.toggle('flipped');
            });
    }, 3000);
    };
};

//if timer === 0, end game 

//check winner
if (gameVars.matches === "8") {
    //display win message
    //stop timer
}