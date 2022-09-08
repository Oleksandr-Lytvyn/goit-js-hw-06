const formRef = document.querySelector('.login-form');
const btnRef = document.querySelector('button');
// const dataArray ={}


formRef.addEventListener('submit', onBtnClick);

function onBtnClick(event) {
    event.preventDefault();
    const {elements: {email, password}} = event.target;
if (email.value === "" || password.value === "") {
    alert('всі поля повинні бути заповнені');
    return
}
  const dataArray = {
    email: email.value,
    password: password.value,
  }
  console.log(dataArray);
  formRef.reset()
}
