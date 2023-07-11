// import createButtonsEvent from './all-books-by-category';

// const list = document.querySelector('.best_sellers_list');

// async function getTopBooks() {
//   const url = `https://books-backend.p.goit.global/books/top-books`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Request failed');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.warn('Error:', error);
//     throw error;
//   }
// }

// function truncateString(str) {
//   if (window.innerWidth > 767 && window.innerWidth < 1440 && str.length > 22) {
//     return str.substring(0, 20) + '...';
//   }

//   if (window.innerWidth > 1440 && str.length > 20) {
//     return str.substring(0, 18) + '...';
//   }
//   return str;
// }
// export default async function fetchData() {
//   try {
//     let li_Item = '';
//     const genres = await getTopBooks();
//     {
//       //console.log(genres);
//       //console.log(genres[0]);
//       for (const genre of genres) {
//         let li_insert_item = '';
//         for (const book of genre.books) {
//           li_insert_item += `<li class="list_book_item"><a href="#"><div class="quick_view_card">
//               <img src="${
//                 book.book_image
//               }" alt="" loading="lazy" class="bestSellers_image_place" data-book-id=${
//             book._id
//           }/></div>
//               <p class="name_of_the_book">${truncateString(book.title)}</p>
//               <p class="writer_name">${truncateString(book.author)}</p></a>
//             </li>`;
//         }
//         li_Item += `<li><div class="top_of_genres_div"> 
//         <p class="all_genres_list_header">
//             ${genre.list_name}
//           </p>
//              <ul class="top_genre_cards_list">
//               ${li_insert_item}
//             </ul>
//              <div class="btn_see_more_div">
//             <button class="see_more_btn" data-category="${genre.list_name}" type="button">see more</button>
//           </div>
//           </div>
//           </li>`;
//       }
//     }

//     list.innerHTML = '';
//     list.insertAdjacentHTML('beforeend', li_Item);

//     // createButtonsEvent();
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// fetchData();

