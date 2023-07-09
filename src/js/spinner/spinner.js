//імпорт константа кнопки з all categories
//імпорт константа кнопки з sing in/sing up

export const spinnerContainer = document.querySelector('.spinner__container');

window.addEventListener('load', hideSpinner);
//прослухати клік all categories slawSpinner
//прослухати сабміт sing up activeSpinner
//прослухати сабміт sing in activeSpinner

// приховуєм спінер при завантаженій сторінці
function hideSpinner() {
  setTimeout(() => {
    spinnerContainer.style.display = 'none';
  }, 3000);
}
// завантаження спінера при сабміті на кнопку у формі sing in/sing up
function activeSpinner() {
  spinnerContainer.style.display = 'flex';
  setTimeout(() => {
    spinnerContainer.style.display = 'none';
  }, 1000);
}
// завантаження спінера при кліку на кнопку all categories
function slawSpinner() {
  spinnerContainer.style.display = 'flex';
  setTimeout(() => {
    spinnerContainer.style.display = 'none';
  }, 3000);
}
