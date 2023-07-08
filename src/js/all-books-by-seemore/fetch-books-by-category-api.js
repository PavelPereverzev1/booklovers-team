import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books/category';

export default class BooksByCategoryApi {
  category = '';

  async fetchBooks() {
    const encodedCategory = encodeURIComponent(this.category);

    const url = `${BASE_URL}?category=${encodedCategory}`;

    const response = await axios.get(url);

    return response;
  }
}
