const likeActive = () => {
    let likeBtn = document.querySelectorAll('.product-template__like');

    for (let i = 0; i < likeBtn.length; i++) {
        likeBtn[i].onclick = function () {
            this.classList.toggle('product-template__like--active');
        }
    }
}

export {likeActive};