import bookAPI from './book-api-class';
import renderMarkupByData from './render-markup-books-by-data';
import { slawSpinner } from './spinner/spinner';

const API = new bookAPI();

async function onSeeMoreBtnClick(e) {
  try {
    slawSpinner();

    const bookCategoryName = e.target.dataset.category;

    const data = await API.getBooksBySeeMore(bookCategoryName);

    renderMarkupByData(data, bookCategoryName);
    API.filterByCategory(bookCategoryName);
  } catch (err) {
    console.log(err.message);
  }
}

export default function createButtonsEvent() {
  const seeMoreBtns = document.querySelectorAll('.see_more_btn');

  if (seeMoreBtns.length > 0) {
    seeMoreBtns.forEach(btn => {
      btn.addEventListener('click', onSeeMoreBtnClick);
    });
  } else {
    setTimeout(createButtonsEvent, 500);
  }
}

createButtonsEvent();
