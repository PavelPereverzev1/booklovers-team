import { remove, save } from './storage';

export const NAME_STORAGE_USER = 'userData';

const refs = {
  loginBtn: document.querySelector('.js-log-in-btn'),
  loginBtnMobile: document.querySelector('.js-log-in-btn-mobile'),
  logoutBtnMobile: document.querySelector('.js-log-out-btn-mobile'),
  modalRegistration: document.querySelector('.js-modal-registration'),
  closeBtn: document.querySelector('.js-modal-registration-close-btn'),
  signUpForm: document.querySelector('.js-sign-up-form'),
};

// refs.loginBtn.addEventListener('click', openLoginWindow);
refs.loginBtnMobile.addEventListener('click', openLoginWindow);
refs.closeBtn.addEventListener('click', closeLoginWindow);
refs.signUpForm.addEventListener('submit', submitRegistration);
// refs.logoutBtn.addEventListener('click', logOut);
refs.logoutBtnMobile.addEventListener('click', logOut);

function submitRegistration(event) {
  event.preventDefault();

  const { name, email, pwd } = event.currentTarget.elements;
  const userData = {
    name: name.value,
    email: email.value,
    password: pwd.value,
  };

  save(NAME_STORAGE_USER, userData);

  refs.signUpForm.reset();
  location.reload();
}

function logOut() {
  remove(NAME_STORAGE_USER);
  location.reload();
}

function openLoginWindow() {
  refs.modalRegistration.classList.add('open');
}

function closeLoginWindow() {
  refs.modalRegistration.classList.remove('open');
}
