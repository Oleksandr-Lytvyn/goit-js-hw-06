function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = [];
const divRef = document.querySelector('#boxes');


btnCreate.addEventListener('click', createBoxes)

function createBoxes() {
  const desiredAmount = Number(document.querySelector('[type="number"]').value);
  for (let i = 0; i < desiredAmount; i++) {
    const box = `<div  width="30" height="30" color="${getRandomHexColor()}"></div>`
    boxes.push(box)
  }
}
divRef.insertAdjacentHTML("afterbegin", boxes);