// Requisito 2 e 3
// Referência: Refatoração desses requisitos para adicionar a cor via JV, após um code review do colega Guthias.
const firstColor = document.querySelectorAll('.color')[0];
firstColor.style.backgroundColor = 'black';

const secondColor = document.querySelectorAll('.color')[1];
secondColor.style.backgroundColor = 'green';

const thirdColor = document.querySelectorAll('.color')[2];
thirdColor.style.backgroundColor = 'blue';

const fourthColor = document.querySelectorAll('.color')[3];
fourthColor.style.backgroundColor = 'pink';

// Requisito 4
const pixelBoard = document.querySelector('#pixel-board');
function createPixel(input) {
  const lines = input;
  const coluns = input;
  for (let index = 1; index <= lines; index += 1) {
    const divLine = document.createElement('div');
    for (let index2 = 1; index2 <= coluns; index2 += 1) {
      const box = document.createElement('div');
      box.className = 'pixel';
      divLine.appendChild(box);
    }
    pixelBoard.appendChild(divLine);
  }
}
createPixel(5);

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
// Referência: Agradecimento especial ao colega Gustavo Mathias(Guthias) para a realização desse requisito.
const pixelSelected = document.querySelectorAll('.pixel');
for (let index = 0; index < pixelSelected.length; index += 1) {
  pixelSelected[index].addEventListener('click', paintPixel);
}
function paintPixel(event) {
  const colorSelected = document.querySelector('.selected');
  const addColor = colorSelected.style.backgroundColor;
  event.target.style.backgroundColor = addColor;
}

// Requisito 9

const clearButton = document.querySelector('#clear-board');
function clearPixels() {
  for (let index = 0; index < pixelSelected.length; index += 1) {
    pixelSelected[index].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clearPixels);

// Requisito 10.
const generateBoard = document.querySelector('#generate-board');
generateBoard.addEventListener('click', () => {
  const input = document.querySelector('#board-size');
  let inputValue = input.value;
  if (inputValue === '') {
    alert('Board inválido!');
  }
  if (inputValue < 5) {
    inputValue = 5;
  }
  if (inputValue > 50) {
    inputValue = 50;
  }
  pixelBoard.innerHTML = '';
  createPixel(inputValue);
});

// Requisito 12
// Referência: Agradecimento aos colegas Gabriel Resende e Byanca Knorst pelo entendimento do Math.round e Math.random.
function randomColor() {
  const aleatColor1 = Math.round(Math.random() * 255);
  const aleatColor2 = Math.round(Math.random() * 255);
  const aleatColor3 = Math.round(Math.random() * 255);
  const newColor = `rgb(${aleatColor1},${aleatColor2},${aleatColor3})`;
  return newColor;
}
secondColor.style.backgroundColor = randomColor();
thirdColor.style.backgroundColor = randomColor();
fourthColor.style.backgroundColor = randomColor();