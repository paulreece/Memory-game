// let gc = document.querySelector('#gc');

// gc.addEventListener('click', (e) =>
// console.log(e.target.id +' was clicked'))

let items = document.querySelectorAll(".card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matched = "0";
let score = document.getElementById("score");

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
  console.log((matched += "+1"));
  score.innerHTML = eval(matched);
  setTimeout(function () {
    alert("Correct!");
  }, 1000);
}

function win() {
  if (matched === "111111") {
    alert("Congrats You won!!!");
  }
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  items.forEach((item) => {
    let randomPos = Math.floor(Math.random() * 12);
    item.style.order = randomPos;
  });
})();

items.forEach((item) => item.addEventListener("click", flipCard));

let minutesLabel = document.getElementById("minute");

let secondsLabel = document.getElementById("second");

let totalSeconds = 0;

setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
