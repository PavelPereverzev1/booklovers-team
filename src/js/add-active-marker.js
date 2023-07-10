const homeBtn = document.querySelector('.js-btn-hm');
const shopListBtn = document.querySelector('.js-btn-sl');

function addMarker() {
    // Очищуємо класи усіх кнопок
    homeBtn.classList.remove('current');
    shopListBtn.classList.remove('current');
    console.log(window.location.pathname)

    if (window.location.pathname === './index.html') {
        homeBtn.classList.add('current');
    } else {
        shopListBtn.classList.add('current');
    }
}
// /booklovers-team/shopping-list.html
// Викликаємо функцію addMarker один раз при завантаженні сторінки
addMarker();