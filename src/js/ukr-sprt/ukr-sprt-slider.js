import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper.min.css';
// import 'swiper/modules/navigation/navigation.min.css';
import fondsData from './ukr-sprt-data';
import createMarkup from './create-markup';
const markup = fondsData.map(createMarkup).join('');
const sliderRef = document.querySelector('.swiper-wrapper');

sliderRef.insertAdjacentHTML('beforeend', markup);

// Swiper.use([Navigation]);
const swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 6,
      },
    },
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
    },
  });
  