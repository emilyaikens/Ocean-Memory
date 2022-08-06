let domSelect = {
    cards: document.querySelectorAll('.card'),
    timer: document.getElementById("time-left"),
    matches: document.getElementById("matches"),
    directions: document.getElementById("directions")
};
let gameVars = {
    matches: 0,
    totalClicks: 0,
    firstSelect: "null",
    secondSelect: "null"
};
initiate();
//click and flip card
function initiate () {
    domSelect.cards.forEach(function(card) {
        card.addEventListener('click', function() {
            card.classList.toggle('flipped');
         })
    });
};
    domSelect.cards.forEach(function(card) {
        card.addEventListener('click', function() {
           let cardFront = card.firstElementChild.innerHTML; //get inner html of .card-front of clicked card
           gameVars.totalClicks = gameVars.totalClicks + 1; //count total clicks
           if (gameVars.firstSelect === "null") { //player selections
             gameVars.firstSelect = cardFront;
           } else if (gameVars.firstSelect !== "null" && gameVars.secondSelect === "null") {
            gameVars.secondSelect = cardFront;
           };
           console.log(gameVars.totalClicks);
           console.log(gameVars.secondSelect);
           console.log(gameVars.firstSelect);
         });
    });

if (gameVars.firstSelect !== "null" && gameVars.secondSelect !== "null") { //work on this!
    if (gameVars.firstSelect === gameVars.secondSelect) {
        gameVars.matches = gameVars.matches + 1;
        console.log(gameVars.matches);
        domSelect.matches.innerHTML = ("matches: " + gameVars.matches);
        //can't click on matched tiles anymore
    }
    //turn cards back around (on timer)
};
if (gameVars.totalClicks === 1) {
    //start timer
}

//if timer === 0, end game 

//check winner
if (gameVars.matches === "8") {
    //display win message
    //stop timer
}