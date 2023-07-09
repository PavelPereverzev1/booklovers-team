import { save, load } from './storage';
import bookAPI from './book-api-class';

const NAME_STORAGE = 'shopping-list';
const api = new bookAPI();
const id = '643282b1e85766588626a082';

const addBtn = document.querySelector('.modal-add-btn');
addBtn.addEventListener('click', controlShoppingList);

async function controlShoppingList() {
  if (!load(NAME_STORAGE)) save(NAME_STORAGE, []);

  const id = getId();
  const shoppingList = load(NAME_STORAGE);
  const currentBook = await api.getBook(id);

  if (shoppingList.some(book => book._id === id)) {
    removeBookFromStorage(id);
    //   replaceButtonWithAdd();
    return;
  }

  saveBookToStorage(currentBook);
  // replaceButtonWithRemove();
}

/* ---------------------------------- */

function getId() {
  return id;
}

function saveBookToStorage(book) {
  const booksInShoppingList = load(NAME_STORAGE);
  booksInShoppingList.push(book);
  save(NAME_STORAGE, booksInShoppingList);
}

function removeBookFromStorage(id) {
  const booksInShoppingList = load(NAME_STORAGE);
  const indexBook = booksInShoppingList.findIndex(book => book._id === id);
  booksInShoppingList.splice(indexBook, 1);
  save(NAME_STORAGE, booksInShoppingList);
}
