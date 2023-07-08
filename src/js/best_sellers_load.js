import axios from 'axios';
const list = document.querySelector('.best_sellers_list');

async function getTopBooks() {
  const url = `https://books-backend.p.goit.global/books/top-books`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn('Error:', error);
    throw error;
  }
}

function truncateString(str) {
  if (str.length > 20) {
    return str.substring(0, 15) + '...';
  }
  return str;
}

async function fetchData() {
  try {
    let li_Item = '';
    const genres = await getTopBooks();
    {
      //console.log(genres);
      //console.log(genres[0]);
      for (const genre of genres) {
        let li_insert_item = '';
        for (const book of genre.books) {
          li_insert_item += `<li><a href = "#">
              <img src="${
                book.book_image
              }" alt="" loading="lazy" class = "bestSellers_image_place" />
              <p class="name_of_the_book">${truncateString(book.title)}</p>
              <p class="writer_name">${truncateString(book.author)}</p></a>
            </li>`;
        }
        li_Item += `<li><div class="top_of_genres_div"> 
        <p class="all_genres_list_header">
            ${genre.list_name}
          </p>
             <ul class="top_genre_cards_list">
              ${li_insert_item}
            </ul>
             <div class="btn_see_more_div">
            <button class="see_more_btn">see more</button>
          </div>
          </div>
          </li>`;
      }
    }
    list.insertAdjacentHTML('beforeend', li_Item);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
