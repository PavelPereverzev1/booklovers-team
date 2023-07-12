// import bookAPI from './book-api-class';
// import renderMarkupByData from './render-markup-books-by-data';
// import { slawSpinner } from './spinner/spinner';

// const API = new bookAPI();

// async function onSeeMoreBtnClick(e) {
//   try {
//     slawSpinner();
//     const contentBox = document.querySelector('.all_categories_section');
//     const categoryName = e.target.dataset.category;
//     const books = API.getAllBookInCategory(categoryName);
    
//     books
//     .then(res => {
//       API.renderSelectedCategory(contentBox, categoryName, res);
//     })
//     .catch(error => console.error(error));
   
//     API.filterByCategory(categoryName);
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// export default function createButtonsEvent() {
//   const seeMoreBtns = document.querySelectorAll('.see_more_btn');
  
//   if (seeMoreBtns.length > 0) {
//     seeMoreBtns.forEach(btn => {
//       btn.addEventListener('click', onSeeMoreBtnClick);
//     });
//   } else {
//     setTimeout(createButtonsEvent, 500);
//   }
// }

// createButtonsEvent();
