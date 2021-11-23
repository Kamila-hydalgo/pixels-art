// Requisito 2 e 3
let firstColor = document.querySelectorAll('.color')[0];
firstColor.style.backgroundColor = 'black';

let secondColor = document.querySelectorAll('.color')[1];
secondColor.style.backgroundColor = 'green';

let thirdColor = document.querySelectorAll('.color')[2];
thirdColor.style.backgroundColor = 'blue';

let fourthColor = document.querySelectorAll('.color')[3];
fourthColor.style.backgroundColor = 'pink';

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
const selected = document.querySelectorAll('.color')[0];
selected.classList.add('selected');

// Requisito 7
function selectColor(event) {
  const colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}
firstColor.addEventListener('click', selectColor);
secondColor.addEventListener('click', selectColor);
thirdColor.addEventListener('click', selectColor);
fourthColor.addEventListener('click', selectColor);

// Requisito 8

const pixelSelected = document.querySelectorAll('.pixel');
for (let index = 0; index < pixelSelected.length; index += 1) {
  pixelSelected[index].addEventListener('click', paintPixel);
}

function paintPixel(event) {
  const colorSelected = document.querySelector('.selected');
  let addColor = colorSelected.style.backgroundColor;
  event.target.style.backgroundColor = addColor;
}

// Requisito 12
// Referência
function randomColor() {
  const aleatColor1 = Math.round(Math.random() * 255);
  const aleatColor2 = Math.round(Math.random() * 255);
  const aleatColor3 = Math.round(Math.random() * 255);
  const newColor = `rgb(${aleatColor1},${aleatColor2},${aleatColor3})`;
  return newColor;
}

secondColor.style.backgroundColor = randomColor();

thirdColor.style.backgroundColor = randomColor();

// fourthColor.style.backgroundColor = randomColor();