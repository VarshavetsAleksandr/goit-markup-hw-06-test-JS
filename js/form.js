const formEl = document.querySelector('[name="modal_form"]');
const phoneEl = document.querySelector('.modal-form-input[type="tel"]');
const formIconEl = document.querySelector('[data-form-icon]');
const formFieldEl = document.querySelector('[data-form-field]');

Inputmask('+38 (0**) 999-99-99', {
  placeholder: '*',
  showMaskOnHover: false,
  oncomplete: () => {
    formIconEl.classList.add('valid-phone');
    formFieldEl.classList.add('valid-field');
  },
  oncleared: () => {
    formIconEl.classList.remove('valid-phone');
    formFieldEl.classList.remove('valid-field');
  },
}).mask(phoneEl);

