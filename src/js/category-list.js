import bookAPI from './book-api-class';

const api = new bookAPI();

api.renderAllCategoriesList(".categories-list");

async function loadHomepage(){
    const list = document.querySelector('.all_categories_section');
    const topBooks = await api.getTopBooks();
    api.renderHomePage(list, topBooks);
}
loadHomepage();

function hideBook() {
    let screenSize = window.innerWidth;
    const element = document.querySelectorAll(".top_genre_cards_list");
    console.log("current window size is " + screenSize + "px");
    console.log("Best Sellers Books array:");
    console.dir(element);
    if (screenSize <= 768) {
        console.dir(element.childNodes);
        // const length = element.childNodes.length - 1;
        // console.log(Number(length));
    } else {
        // element.classList.remove('visually-hidden');
        // console.dir(element);
    }
}

hideBook();

window.addEventListener('resize', hideBook);