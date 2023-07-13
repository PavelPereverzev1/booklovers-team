import { load, remove, save } from './storage';

export const NAME_STORAGE_USER = 'userData';

const refs = {
  loginBtn: document.querySelector('.js-log-in-btn'),
  loginBtnMobile: document.querySelector('.js-log-in-btn-mobile'),
  logoutBtn: document.querySelector('.js-log-out-btn'),
  logoutBtnMobile: document.querySelector('.js-log-out-btn-mobile'),
  userBtn: document.querySelector('.js-user-btn'),
  userBtnText: document.querySelector('.js-user-btn span'),
  modalRegistration: document.querySelector('.js-modal-registration'),
  closeBtn: document.querySelector('.js-modal-registration-close-btn'),
  signUpForm: document.querySelector('.js-sign-up-form'),
};

refs.loginBtn.addEventListener('click', openLoginWindow);
refs.loginBtnMobile.addEventListener('click', openLoginWindow);
refs.closeBtn.addEventListener('click', closeLoginWindow);
refs.signUpForm.addEventListener('submit', submitRegistration);
refs.logoutBtn.addEventListener('click', logOut);
refs.logoutBtnMobile.addEventListener('click', logOut);
refs.userBtn.addEventListener('click', getLogoutBtn);

controlBtnLog();

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

function controlBtnLog() {
  if (load(NAME_STORAGE_USER)) {
    const { name } = load(NAME_STORAGE_USER);

    refs.loginBtn.style.display = 'none';
    refs.userBtn.style.display = 'flex';
    refs.userBtnText.textContent = name;
  }
}

function getLogoutBtn(event) {
  event.stopPropagation();
  refs.logoutBtn.style.opacity = 1;
  refs.logoutBtn.style.visibility = 'visible';
  refs.userBtn.addEventListener('click', hiddenLogoutBtn);
  document.addEventListener('click', hiddenLogoutBtn);
}

function hiddenLogoutBtn(event) {
  event.stopPropagation();
  refs.logoutBtn.style.opacity = 0;
  refs.logoutBtn.style.visibility = 'hidden';
  refs.userBtn.removeEventListener('click', hiddenLogoutBtn);
  document.removeEventListener('click', hiddenLogoutBtn);
}
