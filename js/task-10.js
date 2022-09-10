function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const divRef = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBoxes)
btnDestroy.addEventListener('click', destroyBoxes)

function createBoxes() {
  let boxes = '';
  const desiredAmount = Number(document.querySelector('[type="number"]').value);
  for (let i = 1; i <= desiredAmount; i += 1) {
    const box = `<div style="background-color: ${getRandomHexColor()};height:${30 +i * 10}px; width:${30 +i * 10}px;"></div>`
boxes += box;
  }
divRef.insertAdjacentHTML("afterbegin", boxes);
}

function destroyBoxes() {
divRef.innerHTML = '';

}
