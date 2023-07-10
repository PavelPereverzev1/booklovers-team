const list = document.querySelector('.best_sellers_list');

function truncateString(str) {
  if (window.innerWidth > 767 && window.innerWidth < 1440 && str.length > 22) {
    return str.substring(0, 20) + '...';
  }

  if (window.innerWidth > 1440 && str.length > 20) {
    return str.substring(0, 18) + '...';
  }
  return str;
}

export default function renderMarkupByData(books, category) {
  let li_Item = '';
  let li_insert_item = '';

  list.innerHTML = '';

  for (const book of books) {
    li_insert_item += `<li><a href = "#">
              <img src="${
                book.book_image
              }" alt="" loading="lazy" class="bestSellers_image_place" />
              <p class="name_of_the_book">${truncateString(book.title)}</p>
              <p class="writer_name">${truncateString(book.author)}</p></a>
            </li>`;
    li_Item = `<li><div class="top_of_genres_div"> 
             <ul class="top_genre_cards_list">
              ${li_insert_item}
            </ul>
          </div>
          </li>`;
  }

  list.insertAdjacentHTML('beforeend', li_Item);

  renderCategoryHeader(category);
}

export function renderCategoryHeader(category = 'Best Sellers Books') {
  const header = document.querySelector('.best_sellers_header');

  const headerWords = category.split(' ');

  const newHeader = headerWords.map((word, index) => {
    if (index === headerWords.length - 1) {
      `return <span class="h1_span_color">${word}</span>`;
    }

    return word;
  });

  header.innerHTML = newHeader.join(' ');
}
