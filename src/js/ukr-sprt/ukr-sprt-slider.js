import Swiper, {Navigation} from 'swiper';
// import 'swiper/swiper-bundle.css';

import markup from './create-markup';

const sliderRef = document.querySelector('.swiper-wrapper');

sliderRef.insertAdjacentHTML('beforeend', markup);