// let gc = document.querySelector('#gc');

// gc.addEventListener('click', (e) =>
// console.log(e.target.id +' was clicked'))

let items = document.querySelectorAll('.card')

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
}
secondCard=this;


checkForMatch()
}
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
}, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    items.forEach(item => {
        let randomPos = Math.floor(Math.random() * 12);
        item.style.order = randomPos
    })
}) ();

items.forEach(item => item.addEventListener('click', flipCard));