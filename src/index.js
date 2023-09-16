function setImgDisplay() {
    const imgContainer = document.querySelector('.img-container');
    const imgArr = Array.from(imgContainer.childNodes);
    for (let i = 0; i < imgArr.length; i++) {
        if (i === 0) {
            imgArr[i].style.display = 'flex';
        } else {
            imgArr[i].style.display = 'none';
        }
    }
}

setImgDisplay();

function nextSlide() {
    const imgContainer = document.querySelector('.img-container');
    const imgArr = Array.from(imgContainer.childNodes);
    for (let i = 0; i < imgArr.length; i++) {
        if (imgArr[i].style.display === 'flex' && !(i === (imgArr.length - 1))) {
            imgArr[i].style.display = 'none';
            imgArr[i+=1].style.display = 'flex';
        } else if (imgArr[i].style.display === 'flex' && i === (imgArr.length - 1)) {
            imgArr[i].style.display = 'none';
            imgArr[0].style.display = 'flex';
        }
    }
}

function setBtnFuncs() {
    const nextBtn = document.querySelector('#fwd-btn');
    nextBtn.addEventListener('click', nextSlide);
}

setBtnFuncs();