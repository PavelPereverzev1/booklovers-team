import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/';

export default class BooksByCategoryApi {
  category = '';

  async fetchBooks() {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        category: this.category,
      },
    });

    return response;
  }
}
