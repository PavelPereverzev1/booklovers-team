// автор Євгенія

const NAME_STORAGE = 'shopping-list';

const shopingListBooksRef = document.querySelector('.shoping_list_books');
console.log(shopingListBooksRef);

const shopingListArrey = JSON.parse(localStorage.getItem(NAME_STORAGE)) ?? [];

function createMarkupShoppingList(arrey, list) {
  const markup = arrey
    .map(
      ({
        _id,
        book_image,
        list_name,
        title,
        description,
        author,
        buy_links,
      }) => `<li data-id="${_id}">
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
                            <use xlink:href="./images/icons.svg#icon-trash-03.svg"></use>
                        </svg>
                    </button>
                    <ul class="book-stores">
                        <li>
                            <a href="${buy_links[0].url}">
                                <img class="icon-store amazon" src="./images/amazon.jpg" alt="Book cover" /></a>
                        </li>
                        <li>
                            <a href="${buy_links[1].url}"><img class="icon-store apple-book" src="./images//apple-book.jpg" alt="Book cover" /></a>
                        </li>
                        <li>
                            <a href="${buy_links[4].url}"><img class="icon-store book-shop" src="./images//book-shop.jpg" alt="Book cover" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>`
    )
    .join('');

  list.innerHTML = markup;
}

createMarkupShoppingList(shopingListArrey, shoppingListBooksRef);
