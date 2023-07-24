// Author: YURII CORSSA

import { save, load } from './storage';
import bookAPI from './book-api-class';
import { modalNotify, nameBtn, remameBtn } from './modal';

export const NAME_STORAGE = 'shopping-list';
const api = new bookAPI(".categories-list", ".category_section");

let currentBookId = '';

const addBtn = document.querySelector('.modal-add-btn');

if (addBtn) {
  addBtn.addEventListener('click', controlShoppingList);
}

async function controlShoppingList() {
  if (!load(NAME_STORAGE)) save(NAME_STORAGE, []);

  const shoppingList = load(NAME_STORAGE);
  const currentBook = await api.getBook(currentBookId);

  if (shoppingList.some(book => book._id === currentBookId)) {
    removeBookFromStorage(currentBookId);
    remameBtn(nameBtn.add);
    modalNotify.classList.add('hidden');
    return;
  }

  saveBookToStorage(currentBook);
  remameBtn(nameBtn.remove);
  modalNotify.classList.remove('hidden');
}

/* ---------------------------------- */

export function saveCurrentBookId(bookId) {
  currentBookId = bookId;
}

export function saveBookToStorage(book) {
  const booksInShoppingList = load(NAME_STORAGE);
  booksInShoppingList.push(book);
  save(NAME_STORAGE, booksInShoppingList);
}

export function removeBookFromStorage(id) {
  const booksInShoppingList = load(NAME_STORAGE);
  const indexBook = booksInShoppingList.findIndex(book => book._id === id);
  booksInShoppingList.splice(indexBook, 1);
  save(NAME_STORAGE, booksInShoppingList);
}
