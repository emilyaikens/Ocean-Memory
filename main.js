const cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
    card.addEventListener('click', function() {
        card.classList.toggle('flipped');
    })
});
