// Requisito 4
const pixelBoard = document.getElementById('pixel-board');
const lines = 5;
const coluns = 5;
for (let index = 1; index <= lines; index += 1) {
  const divLine = document.createElement('div');
  for (let index2 = 1; index2 <= coluns; index2 += 1) {
    const box = document.createElement('div');
    box.className = 'pixel';
    divLine.appendChild(box);
  }
  pixelBoard.appendChild(divLine);
}

// Requisito 6
const selected = document.getElementById('black');
selected.classList.add('selected');

// Requisito 7
const firstColor = document.getElementById('black');
const secondColor = document.getElementById('green');
const thirdColor = document.getElementById('blue');
const fourthColor = document.getElementById('pink');

firstColor.addEventListener('click', selectColor);
secondColor.addEventListener('click', selectColor);
thirdColor.addEventListener('click', selectColor);
fourthColor.addEventListener('click', selectColor);

function selectColor(event) {
  const colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

// Requisito 8
