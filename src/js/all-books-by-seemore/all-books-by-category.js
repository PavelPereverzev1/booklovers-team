import BooksByCategoryApi from './fetch-books-by-category-api';

const API = new BooksByCategoryApi();
const list = document.querySelector('.best_sellers_list');

const truncateString = str => {
  if (str.length > 20) {
    return str.substring(0, 15) + '...';
  }

  return str;
};

const fetchData = books => {
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
};

const onSeeMoreBtnClick = async e => {
  try {
    const bookCategoryName = e.target.dataset.category;

    API.category = bookCategoryName;

    const data = await API.fetchBooks();

    fetchData(data);

    const header = document.querySelector('.best_sellers_header');

    const headerWords = bookCategoryName.split(' ');

    const newHeader = headerWords.map((word, index) => {
      if (index === headerWords.length - 1) {
        return `<span class="h1_span_color">${word}</span>`;
      }

      return word;
    });

    header.innerHTML = newHeader.join(' ');
  } catch (err) {
    console.log(err.message);
  }
};

const createButtonsEvent = () => {
  const seeMoreBtns = document.querySelectorAll('.see_more_btn');

  if (seeMoreBtns.length > 0) {
    seeMoreBtns.forEach(btn => {
      btn.addEventListener('click', onSeeMoreBtnClick);
    });
  } else {
    setTimeout(createButtonsEvent, 500);
  }
};

createButtonsEvent();
