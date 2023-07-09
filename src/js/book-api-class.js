export default class bookAPI {

    baseURl = "https://books-backend.p.goit.global/books/";
    listEl = "";


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

    async renderAllCategoriesList (targetElclass) {
        this.listEl = targetElclass;
        const listCategories = await this.getAllCategories();
        const targetEl = document.querySelector(this.listEl);
            if (!listCategories) {
                targetEl.innerHTML = "Failed to load categories list";
            }

        const markup = listCategories.map((data) => {
            return `<li class='categories-list-item'>${data.list_name}</li>`;
        }).join('');

        targetEl.innerHTML = markup;
    }

    async getAllBookInCategory() {
        
        const listCategory = document.querySelector(this.listEl);
        listCategory.addEventListener("click", handleListCategory);

        async function handleListCategory (listElement) {
            const targetEl = listElement.target;
            
            const allItems = targetEl.parentNode.childNodes;
            allItems.forEach((item) => {
                if (item.classList.contains("categories-list-item-selected")) {
                    item.classList.remove("categories-list-item-selected");
                }
            });

            targetEl.classList.add("categories-list-item-selected");

            const categoryName = targetEl.textContent;
            let categories = '';
            try {
                const response = await fetch(`https://books-backend.p.goit.global/books/category?category=${categoryName}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch books');
                }
    
                categories = await response.json();

            } catch (error){
                    console.error(error);
            }

          console.log(categoryName);
          console.log(categories);
        }
    }

    async renderBooksInCategory(booksArray){

    }

    }