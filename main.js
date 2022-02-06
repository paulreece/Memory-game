// let gc = document.querySelector('#gc');

// gc.addEventListener('click', (e) =>
// console.log(e.target.id +' was clicked'))

let items = document.querySelectorAll('.card')

function flipCard() {
    this.classList.toggle('flip');
}

items.forEach(item => item.addEventListener('click', flipCard));