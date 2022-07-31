import throttle from 'lodash.throttle';

const FEEDBACK = 'feedback-message';
const EMAIL = 'email';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

// "Слухаємо" введення  даних  в поля  з затримкою 500мс
refs.form.addEventListener('submit', onFormSumit);
refs.email.addEventListener('input', throttle(onEmailInput, 500));
refs.textarea.addEventListener('input', throttle(onTexareaInput, 500));
// refs.textarea.addEventListener('input', onTexareaInput);

// Зберігаємо отримані значення в Local storage
function onEmailInput(e) {
  const email = e.target.value;
  localStorage.setItem(EMAIL, email);
}

function onTexareaInput(e) {
  const message = e.target.value;
  localStorage.setItem(FEEDBACK, message);
}

popuulateMail();
popuulateTextarea();
// повертаємо попередньо введені але  не вілправлені дані (з localStorage) в форму
function popuulateTextarea() {
  const savedMessage = localStorage.getItem(FEEDBACK);
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}

function popuulateMail() {
  const savedEmail = localStorage.getItem(EMAIL);
  if (savedEmail) {
    refs.email.value = savedEmail;
  }
}

// Відправляємо дані/виводимо в консоль, очищаємо форму та локальне сховище
function onFormSumit(e) {
  e.preventDefault();

  console.log('Email:', refs.email.value);
  console.log('Message:', refs.textarea.value);

  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK);
  localStorage.removeItem(EMAIL);
}
