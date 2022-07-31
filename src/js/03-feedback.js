const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSumit);
refs.email.addEventListener('input', onEmailInput);
refs.textarea.addEventListener('input', onTexareaInput);

function onFormSumit(e) {
  e.preventDefault();
}

function onEmailInput(e) {
  const email = e.target.value;
  localStorage.setItem('Email', email);
}

function onTexareaInput(e) {
  const message = e.target.value;
  localStorage.setItem('Fedback-message', message);
}
