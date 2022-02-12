// let gc = document.querySelector('#gc');

// gc.addEventListener('click', (e) =>
// console.log(e.target.id +' was clicked'))

let items = document.querySelectorAll(".card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matched = "0";
let score = document.getElementById("score");
let clicked = "1";
let div1 = document.getElementById("div-1");
let div2 = document.getElementById("div-2");
let div3 = document.getElementById("div-3");
let div4 = document.getElementById("div-4");
let div5 = document.getElementById("div-5");
let div6 = document.getElementById("div-6");
let div7 = document.getElementById("div-7");
let div8 = document.getElementById("div-8");
let div9 = document.getElementById("div-9");
let div10 = document.getElementById("div-10");
let div11 = document.getElementById("div-11");
let div12 = document.getElementById("div-12");

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
  if (eval(matched) < 6) {
    setTimeout(function () {
      alert("Correct!");
    }, 1000);
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

// items.forEach((item) =>
//   item.addEventListener("click", function () {
//     if (eval(matched) === 6) {
//       randomPos = Math.floor(Math.random() * 12);
//       item.style.order = randomPos;
//       item.classList.add("flip");
//       console.log(item.classList);
//     }
//   })
// );

items.forEach((item) => item.addEventListener("click", flipCard));

items.forEach((item) =>
  item.addEventListener("click", function () {
    if (clicked === "1") {
      setInterval(setTime, 1000);
    }
  })
);

items.forEach((item) =>
  item.addEventListener("click", function () {
    console.log((clicked += "1"));
    if (eval(matched) === 6) {
      setTimeout(function () {
        alert("Congrats! you win!");
        totalSeconds = 0;
        score.innerHTML = "";
        clicked = "";
        div1.classList.remove("flip");
        div2.classList.remove("flip");
        div3.classList.remove("flip");
        div4.classList.remove("flip");
        div5.classList.remove("flip");
        div6.classList.remove("flip");
        div7.classList.remove("flip");
        div8.classList.remove("flip");
        div9.classList.remove("flip");
        div10.classList.remove("flip");
        div11.classList.remove("flip");
        div12.classList.remove("flip");
        matched = "0";
        resetBoard();
      }, 1000);
    }
  })
);

let minutesLabel = document.getElementById("minute");

let secondsLabel = document.getElementById("second");

let totalSeconds = 0;

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
