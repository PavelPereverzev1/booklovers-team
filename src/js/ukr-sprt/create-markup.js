// author Pereverzev Pavel
import fondsData from './ukr-sprt-data';


function createMarkup(slide, index){
    return `<div class="swiper-slide">
    <div class="slide__content">
      <div class="slide__number">${(index + 1)
        .toString()
        .padStart(2, '0')}</div>
      <a href="${slide.url}" class="slider__link" target="blank">
        <img srcset="${slide.img.imageUrl}, ${
  slide.img.retinaImageUrl.href
} 2x" 
        src="${slide.img.imageUrl}"
        alt="${slide.title}" 
        class="slider__png">
      </a>
    </div>
  </div>`;
}

export default createMarkup;