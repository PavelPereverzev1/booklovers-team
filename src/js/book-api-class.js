import axios from 'axios';
import renderMarkupByData, {
  renderCategoryHeader,
} from './render-markup-books-by-data';
import fetchData from './best_sellers_load';

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
    if (!listCategories) {
      targetEl.innerHTML = 'Failed to load categories list';
    }

    const markup = listCategories.map(data => {
      return `<li class="categories-list-item">${data.list_name}</li>`;
    });

    markup.unshift("<li class='categories-list-item'>All Categories</li>");

    targetEl.innerHTML = markup.join('');
  }

  async getAllBookInCategory(categoryName) {
    // let categories = '';
    try {
      const response = await fetch(
        `https://books-backend.p.goit.global/books/category?category=${categoryName}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }

      const categories = await response.json();
      // console.log(categories);
      return categories;
    } catch (error) {
      console.error(error);
    }
  }

  async renderAllBooksInCategory() {
    const contentBox = document.querySelector('.best_sellers_div');

    const listCategory = document.querySelector(this.listEl);

    listCategory.addEventListener('click', event => {
      const categoryName = this.getCategoryName(event);

      const categories = this.getAllBookInCategory(categoryName);
      categories
        .then(async res => {
          if (!(event.target.textContent === 'All Categories')) {
            renderMarkupByData(res, categoryName);
          } else {
            await fetchData();
            renderCategoryHeader();
          }
        })
        .catch(e => console.error(e));
    });
  }

  getCategoryName(listElement) {
    // console.dir(listElement);
    const targetEl = listElement.target;

    const allItems = targetEl.parentNode.childNodes;
    allItems.forEach(item => {
      if (item.classList.contains('categories-list-item-selected')) {
        item.classList.remove('categories-list-item-selected');
      }
    });

    targetEl.classList.add('categories-list-item-selected');

    const categoryName = targetEl.textContent;

    console.log(categoryName);
    return categoryName;
  }

  async renderBestSellers() {
    console.log('test');
  }

  async getBook(id) {
    const book = `https://books-backend.p.goit.global/books/${id}`;

    try {
      const response = await axios.get(book);
      const data = response.data;
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

  async getBooksBySeeMore(category) {
    const encodedCategory = encodeURIComponent(category);

    const url = `${this.baseURl}category?category=${encodedCategory}`;

    const response = await fetch(url);

    return response.json();
  }
}
