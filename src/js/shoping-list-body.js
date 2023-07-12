// автор Євгенія

import { removeBookFromStorage } from './handle-shopping-list-modal';
import amazonIcon from '../images/amazon.jpg';
import appleBookIcon from '../images/apple-book.jpg';
import bookshopIcon from '../images/book-shop.jpg';
import booksShopingList from '../images/books-shoping-list.png';
import iconCart from '../images/icons.svg';

const NAME_STORAGE = 'shopping-list';
const shopingListBooksRef = document.querySelector('.shoping_list_books');

if (!shopingListBooksRef) {
  return;
}

const shopingListArrey = JSON.parse(localStorage.getItem(NAME_STORAGE)) ?? [];

shopingListBooksRef.addEventListener('click', onRemoveButtonClick);

createMarkupShoppingList(shopingListArrey, shopingListBooksRef);

async function onRemoveButtonClick(evt) {
  const target = evt.target;
  const currentBook = target.closest('.shoping-list-book-card');
  const currentBookId = currentBook.dataset.id;
  let quantityAllBooks = shopingListArrey.length;
  console.log(quantityAllBooks);
  if (
    target.classList.contains('icon-cart') ||
    target.classList.contains('trash') ||
    target.classList.contains('trash-thumb')
  ) {
    await removeBookFromStorage(currentBookId);
    currentBook.remove();

    quantityAllBooks -= 1;
    console.log(quantityAllBooks);

    if (quantityAllBooks === 0) {
      createMarkupShoppingList(shopingListArrey, shopingListBooksRef);
    }
  }
}

function createMarkupShoppingList(arrey, list) {
  let markup;
  if (arrey.length) {
    markup = arrey
      .map(
        ({
          _id,
          book_image,
          list_name,
          title,
          description,
          author,
          buy_links,
        }) => `<li class="shoping-list-book-card" data-id="${_id}">
            <div class="book-card">
                <img class="book-cover" src="${book_image}" alt="${title}" />
                <div class="book-info">
                    <h3 class="book-title">${title}</h3>
                    <p class="book-category">${list_name}</p>
                    <p class="book-description">
                      ${description}
                    </p>
                    <p class="book-author">${author}</p>
                    <button class="trash-thumb" type="button">
                        <svg class="icon trash">
                            <use class="icon-cart" href="${iconCart}#icon-trash-03"></use>
                        </svg>
                    </button>
                    <ul class="book-stores">
                        <li>
                            <a href="${buy_links[0].url}">
                                <img class="icon-store amazon" src="${amazonIcon}" alt="Book cover" /></a>
                        </li>
                        <li>
                            <a href="${buy_links[1].url}"><img class="icon-store apple-book" src="${appleBookIcon}" alt="Book cover" /></a>
                        </li>
                        <li>
                            <a href="${buy_links[4].url}"><img class="icon-store book-shop" src="${bookshopIcon}" alt="Book cover" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>`
      )
      .join('');
  } else {
    markup = `<div class="shoping_list_box">
        <p class="shoping_list_text">This page is empty, add some books and proceed to order.</p>
        <img class="shoping_list_image" src="${booksShopingList}" alt="books">
    </div>`;
  }
  list.innerHTML = markup;
}
