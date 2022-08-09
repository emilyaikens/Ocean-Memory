initiate();

function initiate() {

    let vars = {
        firstSelect: "null",
        secondSelect: "null",
        clicks: 0,
        matches: 0,
        curCards: [],
        min: 10,
        cardImages: [
            "images/fish.png",
            "images/clam.png",
            "images/octopus.png",
            "images/jelly.png",
            "images/narwal.png",
            "images/ray.png",
            "images/squid.png",
            "images/star.png"
        ]
    };
    let time = vars.min * 60;
    const domSelect = {
        cards: document.querySelectorAll(".card"),
        timer: document.getElementById("time-left"),
        matches: document.getElementById("matches"),
        directions: document.getElementById("directions"),
        button: document.getElementById("play-again")
    };


let randomId = [];
for (let i=0; i<16; i++) {
    let randomNumber = Math.floor(Math.random() * 16);
    if (!randomId.includes.randomNumber) {
        randomId.push(randomNumber);
    }
};

console.log(randomId);
   
//function shuffleCards () { //set imgs to different card ids 
        vars.cardImages.forEach(function(image) {
            
        })
        document.getElementById("1").innerHTML = `<img src="images/jelly.png">`
    //};

    function gameTimer() {
        let myInterval = setInterval(timer, 1000); // one second interval
        function timer() {
            let minutes = Math.floor(time / 60); // minutes will be rounded to the lowest minute
            let seconds = time % 60; // seconds will be the remainder of total/60
            if (seconds < 10) {seconds = "0" + seconds}; // formats 9:9 to 9:09
            if (time === 0) { //when the timer reaches zero, turn it off and display lose message
                clearInterval(myInterval);
                domSelect.directions.innerHTML = "Time is up, you lost";
            };
            if (vars.matches === 8) { //if player get 8 matches, turn off timer and display win message
                clearInterval(myInterval);
                domSelect.directions.innerHTML = "Congratulations, you won!";
            }
            domSelect.timer.innerHTML = ("Time Left: " + minutes + ":" + seconds);
            time--;
        };
    };

    domSelect.cards.forEach(function(card) {
        card.addEventListener('click', function clickCard() {
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
            if (vars.clicks === 1) {gameTimer()}; //if clicks === 1, start timer
            //card.removeEventListener('click', clickCard); //FIX THIS
        });
    });


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

};

function startOVer () {
    //event listener to button
}
