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
    backBtn.type = 'image';
    backBtn.src = '../src/icons/chevron-left.svg';
    imgContainer.className = 'img-container';
    fwdBtnContainer.className = 'btn-container';
    fwdBtn.className = 'slider-btn';
    fwdBtn.id = 'fwd-btn';
    fwdBtn.type = 'image';
    fwdBtn.src = '../src/icons/chevron-right.svg';
    navContainer.className = 'nav-container';
    body.appendChild(sliderContainer);
    sliderContainer.appendChild(backBtnContainer);
    backBtnContainer.appendChild(backBtn);
    sliderContainer.appendChild(imgContainer);
    sliderContainer.appendChild(fwdBtnContainer);
    fwdBtnContainer.appendChild(fwdBtn);
    sliderContainer.appendChild(navContainer);
}

function addImages() {
    const imgContainer = document.querySelector(".img-container");
    const imgArr = [];
    for (let i = 0; i <= 4; i++) {
        imgArr[i] = document.createElement('img');
        imgArr[i].className = 'image';
        imgArr[i].id = `img-${i}`;
        imgArr[i].src = `../src/pics/landscape-${i}.jpg`;
        imgArr[i].alt = `Example landscape image ${i}`;
        imgContainer.appendChild(imgArr[i]);
    }
}

function createNav() {
    const navContainer = document.querySelector('.nav-container');
    const imgContainer = document.querySelector('.img-container');
    const imgArr = Array.from(imgContainer.childNodes);
    const navNodeArr = [];
    for (let i = 0; i < imgArr.length; i++) {
        navNodeArr[i] = document.createElement('div');
        navNodeArr[i].className = 'nav-node';
        navNodeArr[i].id = `node-${i}`;
        navContainer.appendChild(navNodeArr[i]);
    }
}


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

function autoChangeSlides() {
    setInterval(nextSlide, '5000');
}

function styleSlider() {
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.display = 'grid';
    sliderContainer.style.gridTemplateColumns = 'repeat(3, min-content)';
    sliderContainer.style.alignItems = 'center';
}

function styleButtons() {
    const backBtn = document.querySelector('#back-btn');
    const fwdBtn = document.querySelector('#fwd-btn');
    backBtn.style.width = '40px';
    backBtn.style.opacity = '0.3';
    backBtn.style.marginLeft = '5px';
    fwdBtn.style.width = '40px';
    fwdBtn.style.opacity = '0.3';
    fwdBtn.style.marginRight = '5px';
}

function styleImgContainer() {
    const imgContainer = document.querySelector('.img-container');
    imgContainer.style.display = 'flex';
    imgContainer.style.justifyContent = 'center';
}

function setdefaultImgSize(imgArr) {
    const arrVar = imgArr;
    for (let i = 0; i < imgArr.length; i++) {
        arrVar[i].style.width = '400px';
        arrVar[i].style.height = '300px';
    }
}

function styleImages(screen500) {
    const imgContainer = document.querySelector('.img-container');
    const imgArr = Array.from(imgContainer.childNodes);
    for (let i = 0; i < imgArr.length; i++) {
        imgArr[i].style.objectFit = 'contain';
    }
    if (screen500.matches) {
        for (let i = 0; i < imgArr.length; i++) {
            imgArr[i].style.width = '250px';
            imgArr[i].style.height = '150px';
        }
    } else {
        setdefaultImgSize(imgArr);
    }
}

function setImgResize() {
    const screen500 = window.matchMedia('(max-width: 500px)');
    styleImages(screen500);
    screen500.addEventListener('change', styleImages);
}



createSlider();
addImages();
createNav();
addLinkEvent();
setImgDisplay();
setBtnFuncs();
// autoChangeSlides();

styleSlider();
styleButtons();
styleImgContainer();
setImgResize();