const homeBtn = document.querySelector('.js-btn-hm');
const shopListBtn = document.querySelector('.js-btn-sl');

function addMarker() {
    // Очищуємо класи усіх кнопок
    homeBtn.classList.remove('current');
    shopListBtn.classList.remove('current');
    
  const pathname = window.location.pathname;

    if (pathname.includes('shopping-list')) {
        shopListBtn.classList.add('current');
    } else {
        homeBtn.classList.add('current');
    }
}
// /booklovers-team/shopping-list.html
// Викликаємо функцію addMarker один раз при завантаженні сторінки
addMarker();
