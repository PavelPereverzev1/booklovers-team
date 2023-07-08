import bookAPI from './book-api-class';

const api = new bookAPI();

// api.getAllCategories().then(data => console.log(data));

api.renderAllCategoriesList(".categories-list");

api.getAllBookInCategory();
