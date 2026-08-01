const boardEl = document.querySelector('.board');
const boardSizeBtn = document.getElementById('set-board-size');
const randomColorBtn = document.getElementById('random-color');
const colorBtn = document.getElementById('set-color');
const clearBoardBtn = document.getElementById('clear-board');

let currentColor = colorBtn.value;
let randomColorActive = false;
let isDrawing = false;

generateBoard(16);

function generateBoard(size) {
  boardEl.textContent = '';

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.style.width = 960 / size + 'px';
    square.style.height = 960 / size + 'px';

    square.addEventListener('mousedown', (e) => {
      isDrawing = true;
      draw(e);
    });

    square.addEventListener('mouseup', () => (isDrawing = false));
    square.addEventListener('mouseenter', (e) => {
      if (isDrawing) {
        draw(e);
      }
    });

    boardEl.appendChild(square);
  }
}

function draw(e) {
  if (randomColorActive) {
    currentColor = setRandomColor();
  }

  e.target.style.background = currentColor;
}

function random(number) {
  return Math.floor(Math.random() * number + 1);
}

function setRandomColor() {
  return `rgb(${random(255)} ${random(255)} ${random(255)})`;
}

boardSizeBtn.addEventListener('click', () => {
  let size = prompt('Enter value from 1 to 100');
  let sizeNum;

  if (size == null) {
    generateBoard(16);
    return;
  }

  while (true) {
    sizeNum = Number(size);

    if (!Number.isInteger(sizeNum) || sizeNum <= 0 || sizeNum > 100) {
      size = prompt('Please enter valid number from 1 to 100');
    } else {
      break;
    }
  }

  generateBoard(sizeNum);
});

boardEl.addEventListener('mouseleave', () => (isDrawing = false));

colorBtn.addEventListener('change', (e) => {
  randomColorActive = false;
  currentColor = e.target.value;
});

clearBoardBtn.addEventListener('click', () => {
  document.querySelectorAll('.board > div').forEach((square) => {
    square.style.background = '#fff';
  });
});

randomColorBtn.addEventListener('click', () => (randomColorActive = true));
