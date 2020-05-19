import {showModal} from './showModal.js';
import {slide} from './slide.js';
import {navUnderline} from './navUnderline.js';
import {slideProduct} from './slideProduct.js';
import {slideProductTab} from './slideProductTab.js';
import {likeActive} from './likeActive.js';

document.addEventListener("DOMContentLoaded", function() {
    showModal();
    slide();
    navUnderline(`sp-km`);
    navUnderline(`best-seller`);
    slideProduct(`sp-km`);
    slideProductTab(`best-seller`);
    likeActive();
})