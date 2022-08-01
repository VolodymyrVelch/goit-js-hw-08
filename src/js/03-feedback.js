import throttle from 'lodash.throttle';

let formChangeData = {};

const form = document.querySelector('.feedback-form');

// Виконуємо функцію для повернення попередньо введених даних з локал сторедж
fillForm();

form.addEventListener('submit', onFormSumit);

function onFormSumit(e) {
  e.preventDefault();
  const formData = new FormData(form);
  formData.forEach((value, name) => console.log(value, name));
  e.currentTarget.reset();
  formChangeData = {};
  localStorage.removeItem('insertedData');
}

// "Слухаємо" зміни  даних  в поля  з затримкою 500мс
//  додаємо в обєкт сворений для збереження даних імя ключа та значення ключа
//  для  приведення до строки використовуємо JSON.stringify()
form.addEventListener('change', throttle(onFormChange, 500));
function onFormChange(e) {
  formChangeData[e.target.name] = e.target.value;

  localStorage.setItem('insertedData', JSON.stringify(formChangeData));
}

function fillForm() {
  let presistedData = localStorage.getItem('insertedData');
  if (presistedData) {
    presistedData = JSON.parse(presistedData);
    //  беремо ключ збережdеного обєкту та деструктуризуємо в методі forEach , додаємо в поля форми
    Object.entries(presistedData).forEach(([name, value]) => {
      fillForm[name] = name;
      form.elements[name].value = value;
    });
  }
}

// -----------------------------------------------------------------------
// const FEEDBACK = 'feedback-message';
// const EMAIL = 'email';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   email: document.querySelector('.feedback-form input'),
//   textarea: document.querySelector('.feedback-form textarea'),
// };

// // "Слухаємо" введення  даних  в поля  з затримкою 500мс
// refs.form.addEventListener('submit', onFormSumit);
// refs.email.addEventListener('input', throttle(onEmailInput, 500));
// refs.textarea.addEventListener('input', throttle(onTexareaInput, 500));
// // refs.textarea.addEventListener('input', onTexareaInput);

// // Зберігаємо отримані значення в Local storage
// function onEmailInput(e) {
//   const email = e.target.value;
//   localStorage.setItem(EMAIL, email);
// }

// function onTexareaInput(e) {
//   const message = e.target.value;
//   localStorage.setItem(FEEDBACK, message);
// }

// popuulateMail();
// popuulateTextarea();
// // повертаємо попередньо введені але  не вілправлені дані (з localStorage) в форму
// function popuulateTextarea() {
//   const savedMessage = localStorage.getItem(FEEDBACK);
//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//   }
// }

// function popuulateMail() {
//   const savedEmail = localStorage.getItem(EMAIL);
//   if (savedEmail) {
//     refs.email.value = savedEmail;
//   }
// }

// // Відправляємо дані/виводимо в консоль, очищаємо форму та локальне сховище
// function onFormSumit(e) {
//   e.preventDefault();

//   console.log('Email:', refs.email.value);
//   console.log('Message:', refs.textarea.value);

//   e.currentTarget.reset();
//   localStorage.removeItem(FEEDBACK);
//   localStorage.removeItem(EMAIL);
// }
