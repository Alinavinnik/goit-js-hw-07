function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
btnChangeColor.addEventListener('click', changeColor);
function changeColor() {
  const color = getRandomHexColor();
  bodyColor.style.backgroundColor = color;
  spanColor.textContent = color;
}
