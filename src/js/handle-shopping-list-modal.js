// Author: YURII CORSSA

import { save, load } from './storage';
import bookAPI from './book-api-class';

const NAME_STORAGE = 'shopping-list';
const api = new bookAPI();
let currentBookId = '';

const addBtn = document.querySelector('.modal-add-btn');
addBtn.addEventListener('click', controlShoppingList);

async function controlShoppingList() {
  if (!load(NAME_STORAGE)) save(NAME_STORAGE, []);

  const shoppingList = load(NAME_STORAGE);
  const currentBook = await api.getBook(currentBookId);

  if (shoppingList.some(book => book._id === currentBookId)) {
    removeBookFromStorage(currentBookId);
    //   replaceButtonWithAdd();
    return;
  }

  saveBookToStorage(currentBook);
  // replaceButtonWithRemove();
}

/* ---------------------------------- */

export function saveCurrentBookId(bookId) {
  currentBookId = bookId;
  console.log(currentBookId);
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
