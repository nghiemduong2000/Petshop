const slide = () => {
    let size = document.querySelector(".header__banner").clientWidth;
    let slide = document.querySelector(".header__banner-slide");
    let next = document.querySelector(".header__banner-next");
    let pre = document.querySelector(".header__banner-pre");
    let img = document.querySelectorAll(".header__banner-img");
    let activeDot = document.querySelectorAll(".header__banner-dot-inner");
    let max = (size * img.length) - size;

    let count = 0;
    for (let i = 0; i < img.length; i++) {
        img[i].style.width = `${size}px`;
    }
    if (count === 0) {
        activeDot[0].classList.add("header__banner-dot-active");
    }
    const active = () => {
        for (let i = 0; i < activeDot.length; i++) {
            activeDot[i].classList.remove("header__banner-dot-active")
        }
        if (count === 0) {
            activeDot[0].classList.add("header__banner-dot-active");
        } else if (count === (size)) {
            activeDot[1].classList.add("header__banner-dot-active");
        } else if (count === (2*size)) {
            activeDot[2].classList.add("header__banner-dot-active");
        }
    }
    const nextFunc = () => {
        
        if (count < max) {
            count += size;
        } else {
            count = 0;
        }
        slide.style.transform = `translateX(-${count}px)`;
    }
    const preFunc = () => {
        if (count === 0) {
            count = max;
        } else {
            count -= size;
        }
        slide.style.transform = `translateX(-${count}px)`;
    }
    next.onclick = function () {
        nextFunc();
        active();
    }
    pre.onclick = function () {
        preFunc();
        active();
    }
    setInterval(() => {
        nextFunc();
        active();
    }, 5000);
}

export {slide};

