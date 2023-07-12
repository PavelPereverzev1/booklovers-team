import axios from 'axios';
// import renderMarkupByData, {
//   renderCategoryHeader,
// } from './render-markup-books-by-data';
// import fetchData from './best_sellers_load';
// Додав ще імпорт для спіннера from Yaroslav Peleshko
import { activeSpinner } from './spinner/spinner';
// ==================================

export default class bookAPI {
  baseURl = 'https://books-backend.p.goit.global/books/';
  listEl = '';

  async getAllCategories() {
    try {
      const response = await fetch(this.baseURl + 'category-list');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const categories = await response.json();
      return categories;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async renderAllCategoriesList(targetElclass) {
    this.listEl = targetElclass;
    const listCategories = await this.getAllCategories();
    const targetEl = document.querySelector(this.listEl);
    if (!targetEl) {
      return;
    }
    if (!listCategories) {
      targetEl.innerHTML = 'Failed to load categories list';
    }

    const markup = listCategories.map(data => {
      return `<li class="categories-list-item">${data.list_name}</li>`;
    });

    // Додав ще class categories-list-item-selected на All Categories, щоб ця категорія зразу була відмічена при завантаженні сторінки from Yaroslav Peleshko
    markup.unshift(
      "<li class='categories-list-item categories-list-item-selected'>All Categories</li>"
    );
    // =================================

    targetEl.innerHTML = markup.join('');
  }

  async getAllBookInCategory(categoryName) {
    try {
      const response = await fetch(
        `https://books-backend.p.goit.global/books/category?category=${categoryName}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }

      const categories = await response.json();

      return categories;
    } catch (error) {
      console.error(error);
    }
  }

  truncateStr(str) {
    if (
      window.innerWidth > 767 &&
      window.innerWidth < 1440 &&
      str.length > 22
    ) {
      return str.substring(0, 20) + '...';
    }

    if (window.innerWidth >= 1440 && str.length > 20) {
      return str.substring(0, 18) + '...';
    }
    return str;
  }

  async renderAllBooksInCategory() {
    const contentBox = document.querySelector('.category_section');

    const listCategory = document.querySelector(this.listEl);
    
    if(!listCategory){
      return;
    }

    listCategory.addEventListener('click', event => {
      // Додав щоб івент спрацьовував тільки на лішки, а також функцію для спіннера from Yaroslav Peleshko
      if (!(event.target.nodeName === 'LI')) {
        return;
      }

      activeSpinner();
      // ===============================

      const categoryName = this.getCategoryName(event);

      if (categoryName !== 'All Categories') {
        const categories = this.getAllBookInCategory(categoryName);

        categories
          .then(async res => {
            this.renderSelectedCategory(contentBox, categoryName, res);
          })
          .catch(e => console.error(e));
      } else {
        const topBooks = this.getTopBooks();

        topBooks
          .then(collections => {
            this.renderHomePage(contentBox, collections);
          })
          .catch(error => console.error(error));
      }
    });
  }

  prepareCategoryName(categoryName = 'Best Sellers Books') {
    const wordsArr = categoryName.split(' ');
    return wordsArr
      .map((word, index) => {
        if (index === wordsArr.length - 1) {
          return `<span class="h1_span_color">${word}</span>`;
        }
        return word;
      })
      .join(' ');
  }

  getCategoryName(listElement) {
    const targetEl = listElement.target;

    const allItems = targetEl.parentNode.childNodes;
    allItems.forEach(item => {
      if (item.classList.contains('categories-list-item-selected')) {
        item.classList.remove('categories-list-item-selected');
      }
    });

    targetEl.classList.add('categories-list-item-selected');

    const categoryName = targetEl.textContent;

    return categoryName;
  }

  renderHomePage(contentBox, collections) {
    contentBox.childNodes.forEach(noda => {
      if (noda.nodeName !== '#text') {
        if (noda.nodeName === 'H1') {
          noda.innerHTML = this.prepareCategoryName();
        } else if (noda.classList.contains('js-category_div')) {
          const markup = collections
            .map(({ books, list_name }) => {
              const booksList = books
                .map(book => {
                  return `<li class="list_book_item" data-bookid=${book._id} >
                      <img src="${
                        book.book_image
                      }" alt="" loading="lazy" class="category_image_place" />
                      <p class="name_of_the_book">${this.truncateStr(
                        book.title
                      )}</p>
                      <p class="writer_name">${this.truncateStr(
                        book.author
                      )}</p>
                     </li>`;
                })
                .join('');

              return `<li class="genre_div">
                        <p class="all_genres_list_header">${list_name}</p>
                        <ul class="genre_cards_list">
                         ${booksList}
                        </ul>
                        <div class="btn_see_more_div">
                          <button class="see_more_btn" data-category="${list_name}" type="button">see more</button>
                        </div>
                    </li>`;
            })
            .join('');

          noda.innerHTML = `<ul class="js_category_list category_list">
          ${markup}
          </ul>`;
        }
      }
    });
    this.setSeeMoreBtnHandler();
  }

  renderSelectedCategory(contentBox, categoryName, books) {
    contentBox.childNodes.forEach(noda => {
      if (noda.nodeName !== '#text') {
        if (noda.nodeName === 'H1') {
          noda.innerHTML = this.prepareCategoryName(categoryName);
        } else if (noda.classList.contains('js-category_div')) {
          const bookItemMarkup = books
            .map(book => {
              return `<li class="list_book_item" data-bookid=${book._id} >
                  <img src="${
                    book.book_image
                  }" alt="" loading="lazy" class="category_image_place" />
                  <p class="name_of_the_book">${this.truncateStr(
                    book.title
                  )}</p>
                  <p class="writer_name">${this.truncateStr(book.author)}</p>
                 </li>`;
            })
            .join('');
          noda.innerHTML = `<ul class="genre_cards_list category">
          ${bookItemMarkup}
          </ul>`;
        }
      }
    });
    this.setSeeMoreBtnHandler();
  }

  async getBook(id) {
    const book = `https://books-backend.p.goit.global/books/${id}`;

    try {
      const data = await fetch(book).then(responce =>
        responce.json().then(data => {
          return data;
        })
      );
      return data;
    } catch (error) {
      console.log('Error:', error);
    }
  }

  async getTopBooks() {
    try {
      const response = await fetch(this.baseURl + 'top-books');
      if (!response.ok) {
        throw new Error('failed get list of top books');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.warn('Error:', error);
      throw error;
    }
  }

  filterByCategory(category) {
    const firstCategoriesItem =
      document.querySelector('.categories-list').firstElementChild;
    const categoriesItems = Array.from(
      document.querySelector('.categories-list').children
    );

    const filteredItemByCategory = categoriesItems.find(
      item => item.textContent === category
    );

    filteredItemByCategory.classList.add('categories-list-item-selected');

    if (
      firstCategoriesItem.classList.contains('categories-list-item-selected')
    ) {
      firstCategoriesItem.classList.remove('categories-list-item-selected');
    }
  }

  // async getBooksBySeeMore(category) {
  //   const encodedCategory = encodeURIComponent(category);

  //   const url = `${this.baseURl}category?category=${encodedCategory}`;

  //   const response = await fetch(url);

  //   return response.json();
  // }

  setSeeMoreBtnHandler() {
    const seeMoreBtns = document.querySelectorAll('.see_more_btn');
    const contentBox = document.querySelector('.category_section');
    if (seeMoreBtns.length > 0) {
      seeMoreBtns.forEach(btn => {
        btn.addEventListener('click', event => {
          const categoryName = event.target.dataset.category;
          const books = this.getAllBookInCategory(categoryName);

          books
            .then(res => {
              this.renderSelectedCategory(contentBox, categoryName, res);
            })
            .catch(error => console.error(error));

          this.filterByCategory(categoryName);
        });
      });
    }
  }
}
