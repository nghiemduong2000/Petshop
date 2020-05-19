const slideProduct = (prefix) => {
    let size = document.querySelector(`.${prefix}`).clientWidth;
    let slide = document.querySelectorAll(`.${prefix}__slide`);
    let next = document.querySelector(`.${prefix}__btn-next`);
    let pre = document.querySelector(`.${prefix}__btn-pre`);
    let list = document.querySelectorAll(`.${prefix}__list`);

    let max = (size * list.length) - size;

    let count = 0;
    for (let i = 0; i < list.length; i++) {
        list[i].style.width = `${size}px`;
    }
    const nextFunc = () => {
        if (count < max) {
            count += size;
        } else {
            count = 0;
        }
        for (let i of slide) {
            i.style.transform = `translateX(-${count}px)`;
        }
    }
    const preFunc = () => {
        if (count === 0) {
            count = max;
        } else {
            count -= size;
        }
        for (let i of slide) {
            i.style.transform = `translateX(-${count}px)`;
        }
    }
    next.onclick = function () {
        nextFunc();
    }
    pre.onclick = function () {
        preFunc();
    }
}

export {slideProduct};