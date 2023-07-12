
import amazonIcon from '../images/amazon.jpg';
import appleBookIcon from '../images/apple-book.jpg';
import bookshopIcon from '../images/book-shop.jpg';
import { saveCurrentBookId, NAME_STORAGE } from './handle-shopping-list-modal';
import { load } from './storage';

const modalBackdrop = document.querySelector('.modal-backdrop');
const closeBtn = document.querySelector('.modal-close-btn');
const list = document.querySelector(".js-category_div");
const modal = document.querySelector('.modal');
const addRemoveBtn = document.querySelector('.modal-add-btn');

export const nameBtn = {
  add: 'Add to shopping list',
  remove: 'Remove from the shopping list',
};

async function getBookById(bookId) {
  const baseUrl = 'https://books-backend.p.goit.global/books';
  const url = `${baseUrl}/${bookId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn('Error:', error);
    throw error;
  }
}

function createModalMarkup(data) {
  const modalContent = document.querySelector('.modal-flex-container');
  modalContent.innerHTML = `
    <div class="modal-flex-content">  
      <img class="modal-image-book" src="${data.book_image}" alt="Book cover">
      <div class="modal-flex-div">  
        <h2 class="modal-book-name">${data.title}</h2>
        <p class="modal-author">${data.author}</p>
        <p class="modal-description">${data.description}</p>
        <div class="shops-container">
          <a class="modal-shops-images" href="${data.buy_links[0].url}" target="_blank">
            <img class="modal-image-amazon" src="${amazonIcon}" alt="Amazon shop">
          </a>
          <a class="modal-shops-images" href="${data.buy_links[1].url}" target="_blank">
            <img class="modal-image-apple" src="${appleBookIcon}" alt="Apple shop">
          </a>
          <a class="modal-shops-images" href="${data.buy_links[4].url}" target="_blank">
            <img class="modal-image-bookshop" src="${bookshopIcon}" alt="Bookshop">
          </a>
        </div>
      </div>
    </div>
  `;
}

function openModal() {
  modalBackdrop.classList.remove('visually-hidden');
  document.body.classList.add('no-scroll');
  modal.classList.add('visible');
  addEventListeners();
}

function closeModal() {
  modalBackdrop.classList.add('visually-hidden');
  document.body.classList.remove('no-scroll');
  modal.classList.remove('visible');
  removeEventListeners();
}

async function handleListClick(event) {
  const target = event.target;

  if (
    target.classList.contains('category_image_place') ||
    target.classList.contains('writer_name') ||
    target.classList.contains('name_of_the_book')
  ) {
    const liEl = target.parentElement;
    const bookId = liEl.dataset.bookid;
    const bookData = await getBookById(bookId);
    createModalMarkup(bookData);
    openModal();
    saveCurrentBookId(bookData._id);
    handleBtn(bookData._id);
  }
}

function handleCloseBtnClick() {
  closeModal();
}

function handleModalBackdropClick(event) {
  if (event.target === modalBackdrop) {
    closeModal();
  }
}

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function handleBtn(bookId) {
  const shoppingList = load(NAME_STORAGE);

  if (shoppingList.some((book) => book._id === bookId)) {
    remameBtn(nameBtn.remove);
    return;
  }
  remameBtn(nameBtn.add);
}

export function remameBtn(value) {
  addRemoveBtn.textContent = value;
}

function addEventListeners() {
  if (closeBtn) {
    closeBtn.addEventListener('click', handleCloseBtnClick);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', handleModalBackdropClick);
  }

  document.addEventListener('keydown', handleKeyDown);
}

function removeEventListeners() {
  if (closeBtn) {
    closeBtn.removeEventListener('click', handleCloseBtnClick);
  }

  if (modalBackdrop) {
    modalBackdrop.removeEventListener('click', handleModalBackdropClick);
  }

  document.removeEventListener('keydown', handleKeyDown);
}

if (list) {
  list.addEventListener('click', handleListClick);
}