import { save, load } from './storage';

const refs = {
  burgerBtn: document.querySelector('.burger-btn'),
  closeBtn: document.querySelector('.close-btn'),
  mobileMenuContainer: document.querySelector('.mobile-menu_container'),
  mobileMenuGuest: document.querySelector('.mobile-menu_guest'),
  mobileMenuUser: document.querySelector('.mobile-menu_user'),
  burgerIcon: document.querySelector('.burger-ico'),
};

refs.burgerBtn.addEventListener('click', handleMobileMenu);
refs.closeBtn.addEventListener('click', handleMobileMenu);

const user = {
  name: 'userName',
};
let menuStatus = 'close';

save('user', user);

function handleMobileMenu() {
  if (menuStatus === 'close') {
    openMobileMenu();
    refs.closeBtn.style.display = 'flex';
    refs.burgerBtn.style.display = 'none';
    refs.burgerBtn.classList.add('hide');
    refs.closeBtn.classList.add('show');
    menuStatus = 'open';
    return;
  }
  if (menuStatus === 'open') {
    closeMobileMenu();
    refs.closeBtn.style.display = 'none';
    refs.burgerBtn.style.display = 'flex';
    refs.burgerBtn.classList.add('show');
    refs.closeBtn.classList.add('hide');
    menuStatus = 'close';
    return;
  }
}

function openMobileMenu() {
  if (load('user')) {
    removeClass(refs.mobileMenuContainer, 'mobile-menu_is-hidden');
    addClass(refs.mobileMenuUser, 'open');
    return;
  }
  removeClass(refs.mobileMenuContainer, 'mobile-menu_is-hidden');
  addClass(refs.mobileMenuGuest, 'open');
}

function closeMobileMenu() {
  if (load('user')) {
    addClass(refs.mobileMenuContainer, 'mobile-menu_is-hidden');
    removeClass(refs.mobileMenuUser, 'open');
    return;
  }
  addClass(refs.mobileMenuContainer, 'mobile-menu_is-hidden');
  removeClass(refs.mobileMenuGuest, 'open');
}

function addClass(object, value) {
  object.classList.add(value);
}

function removeClass(object, value) {
  object.classList.remove(value);
}
