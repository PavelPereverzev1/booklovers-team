import fondsData from './ukr-sprt-data';

console.log('test');
const sliderRef = document.querySelector('.swiper-wrapper');

const markup = fondsData.map(createMarkup).join('');

sliderRef.insertAdjacentHTML('beforeend', markup);

function createMarkup(slide, index){
    return `<div class="swiper-slide">
      <div class="slide__content">
        <div class="slide__number">${(index + 1)
          .toString()
          .padStart(2, '0')}</div>
        <a href="${slide.url}" class="slider__link" target="blank">
          <img srcset="${slide.img.imageUrl}, ${
    slide.img.imageUrl2x
  } 2x" 
          src="${slide.img.imageUrl}"
          alt="${slide.title}" 
          class="slider__png">
        </a>
      </div>
    </div>`;
}

