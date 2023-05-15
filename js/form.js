const formEl = document.querySelector('[name="modal_phone"]');
const phoneEl = document.querySelector('.modal-form-input[type="tel"]');
const formIconEl = document.querySelector('[data-form-icon]');
const formFieldEl = document.querySelector('[data-form-field]');

Inputmask('+38 (0**) 999-99-99', {
  placeholder: '*',
  showMaskOnHover: false,
  oncomplete: () => {
    formIconEl.classList.add('valid-phone');
    formFieldEl.classList.add('valid-field');
    formIconEl.classList.remove('invalid-phone');
    formFieldEl.classList.remove('invalid-field');
  },
  oncleared: () => {
    formIconEl.classList.remove('valid-phone');
    formFieldEl.classList.remove('valid-field');
    formIconEl.classList.add('invalid-phone');
    formFieldEl.classList.add('invalid-field');
  },
}).mask(phoneEl);
