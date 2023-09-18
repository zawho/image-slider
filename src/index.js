function setImgDisplay() {
    const imgContainer = document.querySelector('.img-container');
    const navContainer = document.querySelector('.nav-container');
    const imgArr = Array.from(imgContainer.childNodes);
    const navArr = Array.from(navContainer.childNodes);
    for (let i = 0; i < imgArr.length; i++) {
        if (i === 0) {
            imgArr[i].style.display = 'flex';
        } else {
            imgArr[i].style.display = 'none';
        }
    }
    for (let i = 0; i < navArr.length; i++) {
        if (i === 0) {
            navArr[i].style.backgroundColor = 'green';
        }
    }
}

function nextNav() {
    const imgContainer = document.querySelector('.img-container');
    const navContainer = document.querySelector('.nav-container');
    const imgArr = Array.from(imgContainer.childNodes);
    const navArr = Array.from(navContainer.childNodes);
    let imgIndex;
    for (let i = 0; i < imgArr.length; i++) {
        if (imgArr[i].style.display === 'flex') {
            imgIndex = i;
        }
    }
    for (let i = 0; i < navArr.length; i++) {
        if (i === imgIndex && i === 0) {
            navArr[i].style.backgroundColor = 'green';
            navArr[navArr.length - 1].style.backgroundColor = 'rgb(195, 194, 194)';
        } else if (i === imgIndex && i > 0) {
            navArr[i].style.backgroundColor = 'green';
            navArr[imgIndex - 1].style.backgroundColor = 'rgb(195, 194, 194)';
        }
    }
}

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
    nextNav();
}

function prevSlide() {
    const imgContainer = document.querySelector('.img-container');
    const imgArr = Array.from(imgContainer.childNodes);
    for (let i = (imgArr.length - 1); i >= 0; i--) {
        if (imgArr[i].style.display === 'flex' && i > 0) {
            imgArr[i].style.display = 'none';
            imgArr[i-=1].style.display = 'flex';
        } else if (imgArr[i].style.display === 'flex' && i === 0) {
            imgArr[i].style.display = 'none';
            imgArr[imgArr.length - 1].style.display = 'flex';
        }
    }
}

function setBtnFuncs() {
    const nextBtn = document.querySelector('#fwd-btn');
    const prevBtn = document.querySelector('#back-btn');
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
}

setImgDisplay();
setBtnFuncs();