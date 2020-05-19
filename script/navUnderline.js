const navUnderline = (prefix) => {
    let line = document.querySelector(`.${prefix}__line`);
    let items = document.querySelectorAll(`.${prefix}__tab`);
    let slide = document.querySelectorAll(`.${prefix}__slide`);
    
    slide[0].classList.add(`lsp__slide--active`);
    for (let i = 0; i < items.length; i++) {
        items[i].onclick = function() {
            items.forEach(function (item) {
                item.classList.remove('is-active');
                item.removeAttribute('style');
            });
            slide.forEach(function(ele) {
                ele.classList.remove(`lsp__slide--active`);
            });
            line.style.width = `${this.offsetWidth}px`;
            line.style.left = `${this.offsetLeft}px`;
            this.classList.add('is-active');
            slide[i].classList.add(`lsp__slide--active`);
        }
    }
    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains("is-active") === true) {
            line.style.width = `${items[i].offsetWidth}px`;
            line.style.left = `${items[i].offsetLeft}px`;
        }
    }

}

export {navUnderline};