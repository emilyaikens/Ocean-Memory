let domSelect = {
    cards: document.querySelectorAll('.card'),
    timer: document.getElementById("time-left"),
    matches: document.getElementById("matches"),
    directions: document.getElementById("directions")
};
let gameVariables = {
    matches: 0,
    firstSelect: "null",
    secondSelect: "null",
};

function flipCards() {
    domSelect.cards.forEach(function(card) {
        card.addEventListener('click', function() {
            card.classList.toggle('flipped');
         })
    });
};

flipCards();
