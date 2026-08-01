const boardEl = document.querySelector('.board');
const boardSizeBtn = document.getElementById('set-board-size');
const randomColorBtn = document.getElementById('random-color');
const darkenEffectBtn = document.getElementById('darken-effect');
const colorBtn = document.getElementById('set-color');

generateBoard(16);

boardSizeBtn.addEventListener('click', (e) => {
  let size = prompt('Enter value from 1 to 100');

  if (size == null) {
    generateBoard(16);
    return;
  }

  while (true) {
    if (
      (size !== null && !Number.isInteger(Number(size))) ||
      Number(size) <= 0 ||
      Number(size) > 100
    ) {
      size = prompt('Please enter valid number from 1 to 100');
    } else {
      break;
    }
  }

  generateBoard(Number(size));
});

function generateBoard(size) {
  boardEl.textContent = '';
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.style.width = 960 / size + 'px';
    square.style.height = 960 / size + 'px';
    boardEl.appendChild(square);
  }
}
