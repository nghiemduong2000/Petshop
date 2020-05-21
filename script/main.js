import {showModal} from './showModal.js';
import {slide} from './slide.js';
import {navUnderline} from './navUnderline.js';
import {slideProduct} from './slideProduct.js';
import {slideProductTab} from './slideProductTab.js';
import {likeActive} from './likeActive.js';
import {scroll} from './scroll.js';

document.addEventListener("DOMContentLoaded", function() {
    showModal();
    slide();
    navUnderline(`sp-km`);
    navUnderline(`best-seller`);
    navUnderline(`hot-branding`);
    navUnderline(`news`);
    slideProduct(`sp-km`);
    slideProduct(`hot-branding`);
    slideProduct(`news`);
    slideProductTab(`best-seller`);
    likeActive();
    scroll();
})