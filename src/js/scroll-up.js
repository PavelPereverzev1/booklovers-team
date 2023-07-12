const scrollButton = document.querySelector('.btn_scroll_up-container')
if (scrollButton === null){
    return;
}
else{
scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
}
function handleScroll() {
    if (window.scrollY > 500) {
        scrollButton.style.display = 'block';
    }
    else{
        scrollButton.style.display = 'none';
    }
   
}


window.addEventListener('scroll', handleScroll);