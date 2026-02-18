function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector('body');
const btnChangeColor = document.querySelector('.js-btn');
const spanColor = document.querySelector('.color');
btnChangeColor.addEventListener('click', changeColor);
function changeColor() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
}
