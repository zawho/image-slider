function createSlider() {
    const body = document.querySelector('body');
    const sliderContainer = document.createElement('div');
    const backBtnContainer = document.createElement('div');
    const backBtn = document.createElement('input');
    const imgContainer = document.createElement('div');
    const fwdBtnContainer = document.createElement('div');
    const fwdBtn = document.createElement('input');
    const navContainer = document.createElement('div');
    sliderContainer.className = 'slider-container';
    backBtnContainer.className = 'btn-container';
    backBtn.className = 'slider-btn';
    backBtn.id = 'back-btn';
    backBtn.src = 'icons/chevron-left.svg';
    imgContainer.className = 'img-container';
    fwdBtnContainer.className = 'btn-container';
    fwdBtn.className = 'slider-btn';
    fwdBtn.id = 'fwd-btn';
    fwdBtn.src = 'icons/chevron-right.svg';
    navContainer.className = 'nav-container';
    body.appendChild(sliderContainer);
    sliderContainer.appendChild(backBtnContainer);
    backBtnContainer.appendChild(backBtn);
    sliderContainer.appendChild(imgContainer);
    sliderContainer.appendChild(fwdBtnContainer);
    fwdBtnContainer.appendChild(fwdBtn);
    sliderContainer.appendChild(navContainer);
}

function createNav() {
    const navContainer = document.querySelector('.nav-container');
    const navNodeArr = [];
    for (let i = 1; i <= 5; i++) {
        navNodeArr[i] = document.createElement('div');
        navNodeArr[i].className = 'nav-node';
        navNodeArr[i].id = `node-${i}`;
        navContainer.appendChild(navNodeArr[i]);
    }
    
}

createSlider();
createNav();

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

function linkNav() {
    const imgContainer = document.querySelector('.img-container');
    const navContainer = document.querySelector('.nav-container');
    const imgArr = Array.from(imgContainer.childNodes);
    const navArr = Array.from(navContainer.childNodes);
    let navIndex;
    for (let i = 0; i < navArr.length; i++) {
        if (navArr[i] === this) {
            navArr[i].style.backgroundColor = 'green';
        } else {
            navArr[i].style.backgroundColor = 'rgb(195, 194, 194)';
        }
        if (navArr[i].style.backgroundColor === 'green') {
            navIndex = i;
        }
    }
    for (let i = 0; i < imgArr.length; i++) {
        if (imgArr[i].style.display === 'flex') {
            imgArr[i].style.display = 'none';
        }
        if (i === navIndex) {
            imgArr[i].style.display = 'flex';
        }
    }
}

function addLinkEvent() {
    const navContainer = document.querySelector('.nav-container');
    const navArr = Array.from(navContainer.childNodes);
    for (let i = 0; i < navArr.length; i++) {
        navArr[i].addEventListener('click', linkNav);
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

function prevNav() {
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
        if (i === imgIndex && i === navArr.length - 1) {
            navArr[i].style.backgroundColor = 'green';
            navArr[0].style.backgroundColor = 'rgb(195, 194, 194)';
        } else if (i === imgIndex && i < navArr.length - 1) {
            navArr[i].style.backgroundColor = 'green';
            navArr[imgIndex + 1].style.backgroundColor = 'rgb(195, 194, 194)';
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

function autoChangeSlides() {
    setInterval(nextSlide, '5000');
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
    prevNav();
}

function setBtnFuncs() {
    const nextBtn = document.querySelector('#fwd-btn');
    const prevBtn = document.querySelector('#back-btn');
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
}

addLinkEvent();
setImgDisplay();
setBtnFuncs();
// autoChangeSlides();