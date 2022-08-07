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
    secondSelect: "null"
};
if (gameVars.totalClicks === 1) {
    //start timer
}

    domSelect.cards.forEach(function(card) {
        card.addEventListener('click', function() {
            card.classList.toggle('flipped');
         })
    });

    domSelect.cards.forEach(function(card) {
        card.addEventListener('click', function() {
           let cardFront = card.firstElementChild.innerHTML; //get inner html of .card-front of clicked card
           gameVars.clicks = gameVars.clicks + 1; //count total clicks
           if (gameVars.firstSelect === "null") { //player selections
             gameVars.firstSelect = cardFront;
           } else if (gameVars.firstSelect !== "null" && gameVars.secondSelect === "null") {
            gameVars.secondSelect = cardFront;
           };
           console.log(gameVars.clicks);
           console.log(gameVars.secondSelect);
           console.log(gameVars.firstSelect);
           countMatches();
         });
    });

function flipBack () {
    if (gameVars.clicks === 2 && gameVars.firstSelect !== gameVars.secondSelect) {
        gameVars.clicks = 0;
 //timer ooooof
    }
}

function countMatches () {
    if (gameVars.firstSelect !== "null" && gameVars.secondSelect !== "null") { 
        if (gameVars.firstSelect === gameVars.secondSelect) {
            gameVars.matches = gameVars.matches + 1;
            console.log("matches" + gameVars.matches);
            domSelect.matches.innerHTML = ("matches: " + gameVars.matches);
            //can't click on matched tiles anymore
        }
    gameVars.firstSelect = "null";
    gameVars.secondSelect = "null";
    };
};

//if timer === 0, end game 

//check winner
if (gameVars.matches === "8") {
    //display win message
    //stop timer
}