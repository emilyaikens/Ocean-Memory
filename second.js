
    let vars = {
        firstSelect: "null",
        secondSelect: "null",
        clicks: 0,
        matches: 8,
        curCards: [],
        min: 5,
        cardImages: ["images/fish.png","images/clam.png","images/octopus.png","images/jelly.png","images/narwal.png","images/ray.png","images/squid.png","images/star.png",
                    "images/fish.png","images/clam.png","images/octopus.png","images/jelly.png","images/narwal.png","images/ray.png","images/squid.png","images/star.png"],
    };
    let time = vars.min * 60;
    const domSelect = {
        cards: document.querySelectorAll(".card"),
        timer: document.getElementById("time-left"),
        matches: document.getElementById("matches"),
        directions: document.getElementById("directions"),
        resetButton: document.getElementById("play-again")
    };

    shuffleId(vars.cardImages);
    setCards();

    domSelect.cards.forEach(function(card) {
        card.addEventListener('click', function clickCard() {
            if ((vars.curCards.includes(card.firstElementChild.id) === false) &&
                    (vars.curCards.length < 2)) { //everything under this line only happens if the card hasn't already been clicked
                card.classList.toggle('flipped');  //flip cards
                vars.clicks = vars.clicks + 1 //count clicks (clicks +1)
                vars.curCards.push(card.firstElementChild.id); //push id of clicked card into curCards array ********
                if (vars.clicks % 2 === 0) { //if clicks %2 set secondSelect
                    vars.secondSelect = card.firstElementChild.innerHTML;
                    checkMatch();
                } else {
                    vars.firstSelect = card.firstElementChild.innerHTML;
                };
                if (vars.clicks === 1) {gameTimer()}; //if clicks === 1, start timer
            };
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
                    currentCard.parentElement.classList.toggle('flipped');
                })
        }, 1500);
        };
        vars.firstSelect = "null"; // reset firstSelect and secondSelect to "null"
        vars.secondSelect = "null";
        setTimeout(function(){vars.curCards = []}, 1501); //clears current card array after timed flip executes
    };
   
    function shuffleId(array) {
        let currentId = array.length;
        let randomId;
        while (currentId != 0) { //for as long as the array length is less than 0
          randomId = Math.floor(Math.random() * currentId); 
          currentId--; // subdract one at a time
          [array[currentId], array[randomId]] = [ //swap current array for random array
            array[randomId], array[currentId]];
        }
        return array;
    };

    function setCards () {        
        for (let i = 0; i < 16; i++) {
           const img = document.createElement("img"); //create a new image div
           img.src = vars.cardImages[i]; //image source is an image from image array
           document.getElementById(i).appendChild(img); //add new image div to card parent
           };
    };

   function gameTimer() {
    let myInterval = setInterval(timer, 1000); // one second interval
    function timer() {
        let minutes = Math.floor(time / 60); // minutes will be rounded to the lowest minute
        let seconds = time % 60; // seconds will be the remainder of total/60
        if (seconds < 10) {seconds = "0" + seconds}; // formats 9:9 to 9:09
        if (time === 0) { //when the timer reaches zero, turn it off and display lose message
            clearInterval(myInterval);
            domSelect.directions.innerHTML = "Time is up, you lost";
            document.querySelector(".score-board").style.backgroundColor = "#ffcdd2";
        };
        if (vars.matches === 8) { //if player get 8 matches, turn off timer and display win message
            clearInterval(myInterval);
            playerWin();
        };
        domSelect.timer.innerHTML = ("Time Left: " + minutes + ":" + seconds);
        time--; //update timer visual
    };
    };

    function playerWin() {
        domSelect.directions.innerHTML = "Congratulations, you won!";
        domSelect.directions.style.textTransform = "uppercase";
        /// add class "wiggle" to the directions 
    };

    domSelect.resetButton.addEventListener("click", function() { //reload game
        location.reload();
    });

function biggerBoard () {
    //increase board size to 6x6
    for (let i = 16; i < 37; i++) {
        let transcript = `
        <div class="card">
            <div class="card-back" id=${i}></div>
            <div class="card-front"></div>
        </div>
        `
        let newCard = document.createElement(transcript);
        document.querySelector(".card-container").appendChild(newCard);
    }
    //add 10 new images to card images array
    //update setCards array so that the iteration length is the length of cardImages array
    //update timer to 10 minutes
};