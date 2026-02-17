const input = document.getElementById('name-input');
const spanElem = document.getElementById('name-output');
input.addEventListener('input', () => {
  const inputValue = input.value.trim();
  if (inputValue === '') {
    spanElem.textContent = 'Anonymous';
  } else {
    spanElem.textContent = inputValue;
  }
});
