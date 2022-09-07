const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
inputRef.addEventListener('input', (ev) => {
  outputRef.textContent = ev.currentTarget.value;
});
