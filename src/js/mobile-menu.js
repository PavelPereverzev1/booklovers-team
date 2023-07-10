import { save, load } from './storage';

const refs = {
  burgerBtn: document.querySelector('.burger-btn'),
  mobileMenuContainer: document.querySelector('.mobile-menu_container'),
  mobileMenuGuest: document.querySelector('.mobile-menu_guest'),
  mobileMenuUser: document.querySelector('.mobile-menu_user'),
  burgerIcon: document.querySelector('.burger-ico'),
};

refs.burgerBtn.addEventListener('click', handleMobileMenu);

const user = {
  name: 'userName',
};
let menuStatus = 'close';

save('user', user);

function handleMobileMenu() {
  if (menuStatus === 'close') {
    console.log('close');
    openMobileMenu();
    menuStatus = 'open';
    return;
  }
  if (menuStatus === 'open') {
    console.log('open');
    closeMobileMenu();
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
