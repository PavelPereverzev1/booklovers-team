const scrollButton = document.getElementById("scroll-up-btn")

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

function handleScroll() {
    if (window.scrollY > 500) {
        scrollButton.style.display = 'block';
    }
    else{
        scrollButton.style.display = 'none';
    }
   
}


window.addEventListener('scroll', handleScroll);