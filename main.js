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
    secondSelect: "null",
};

//click and flip card
    domSelect.cards.forEach(function(card) {
        card.addEventListener('click', function() {
            card.classList.toggle('flipped');
         })
    });

    domSelect.cards.forEach(function(card) {
        card.addEventListener('click', function() {
           let cardFront = card.firstElementChild.innerHTML; //get inner html of .card-front of clicked card
           gameVars.totalClicks = gameVars.totalClicks + 1;
           if (gameVars.firstSelect === "null") {
             gameVars.firstSelect = cardFront;
           } else if (gameVars.firstSelect !== "null" && gameVars.secondSelect === "null") {
            gameVars.secondSelect = cardFront;
           };
           console.log(gameVars.totalClicks);
         });
    });

if (gameVars.firstSelect !== "null" && gameVars.secondSelect !== "null") {
    //check if match
    //turn cards back around (on timer)
}

if (gameVars.totalClicks === 1) {
    //start timer
}

//if timer === 0, end game 