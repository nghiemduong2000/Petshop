const showModal = () => {
    let showModal = document.querySelectorAll('.showModal');
    let overlay = document.querySelectorAll('.modal__overlay');
    let modal = document.querySelectorAll('.modal');
    let closeBtn = document.querySelectorAll('.close-modal');

    for (let i = 0; i < showModal.length; i++) {
        showModal[i].onclick = function() {
            for (let k = 0; k < modal.length; k++) {
                for (let h = 0; h < modal[k].classList.length; h++) {
                    if (modal[k].classList[h] === 'modal--appear') {
                        modal[k].classList.remove('modal--appear');
                    }
                }
            }
            let param = this.getAttribute('data-showModal');
            let ele = document.getElementById(param);
            ele.classList.add('modal--appear');
            document.body.style.overflowY = "hidden";
        } 
    }

    for (let i = 0; i < overlay.length; i++) {
        overlay[i].onclick = function() {
            modal[i].classList.remove('modal--appear');
            document.body.style.overflowY = "auto";
        }
    }

    for (let i = 0; i < closeBtn.length; i++) {
        closeBtn[i].onclick = function() {
            modal[i].classList.remove('modal--appear');
            document.body.style.overflowY = "auto";
        }
    }
}

export {showModal};