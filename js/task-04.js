let counterValue = 0;
const btnDecremRef = document.querySelector('[data-action="decrement"]');
const btnIncremRef = document.querySelector('[data-action="increment"]');
const spanRef = document.querySelector('#value');
btnDecremRef.addEventListener('click', () => {
  counterValue -= 1;
  spanRef.textContent = counterValue;
});
btnIncremRef.addEventListener('click', () => {
  counterValue += 1;
  spanRef.textContent = counterValue;
});
