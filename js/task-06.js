const inputRef = document.querySelector('input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur() {
  const desiredNumber = Number(inputRef.dataset.length);
  if (inputRef.value.length === desiredNumber) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}
