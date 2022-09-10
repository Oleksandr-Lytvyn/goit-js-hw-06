const spanRef = document.querySelector('#text');
const inputRef = document.querySelector('#font-size-control');

spanRef.style.fontSize = `${inputRef.value}px`
inputRef.addEventListener('input', onInputChange);

function onInputChange() {
  spanRef.style.fontSize = `${inputRef.value}px`;
  console.log(inputRef.value);
}
