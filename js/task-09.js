function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const spanRef = document.querySelector('[class="color"]');
button.addEventListener('click', ()=>{
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = bodyRef.style.backgroundColor;
})