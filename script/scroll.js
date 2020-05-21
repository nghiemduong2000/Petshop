const scroll = () => {
    const scrollBtn = document.querySelector('.scroll-top');
    let flag = "less 200";
    window.addEventListener("scroll", function() {
        console.log(window.pageYOffset);
        if (window.pageYOffset > 200) {
            if (flag === "less 200") {
                flag = "bigger 200";
                scrollBtn.classList.add("scroll-top--active");
            }
        } else if (window.pageYOffset <= 200) {
            if (flag === "bigger 200") {
                flag = "less 200";
                scrollBtn.classList.remove("scroll-top--active");
            }
        }
    })
}

export {scroll};