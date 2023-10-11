/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function createSlider() {\n    const body = document.querySelector('body');\n    const sliderContainer = document.createElement('div');\n    const backBtnContainer = document.createElement('div');\n    const backBtn = document.createElement('input');\n    const imgContainer = document.createElement('div');\n    const fwdBtnContainer = document.createElement('div');\n    const fwdBtn = document.createElement('input');\n    const navContainer = document.createElement('div');\n    sliderContainer.className = 'slider-container';\n    backBtnContainer.className = 'btn-container';\n    backBtn.className = 'slider-btn';\n    backBtn.id = 'back-btn';\n    backBtn.type = 'image';\n    backBtn.src = '../src/icons/chevron-left.svg';\n    imgContainer.className = 'img-container';\n    fwdBtnContainer.className = 'btn-container';\n    fwdBtn.className = 'slider-btn';\n    fwdBtn.id = 'fwd-btn';\n    fwdBtn.type = 'image';\n    fwdBtn.src = '../src/icons/chevron-right.svg';\n    navContainer.className = 'nav-container';\n    body.appendChild(sliderContainer);\n    sliderContainer.appendChild(backBtnContainer);\n    backBtnContainer.appendChild(backBtn);\n    sliderContainer.appendChild(imgContainer);\n    sliderContainer.appendChild(fwdBtnContainer);\n    fwdBtnContainer.appendChild(fwdBtn);\n    sliderContainer.appendChild(navContainer);\n}\n\nfunction addImages() {\n    const imgContainer = document.querySelector(\".img-container\");\n    const imgArr = [];\n    for (let i = 0; i <= 4; i++) {\n        imgArr[i] = document.createElement('img');\n        imgArr[i].className = 'image';\n        imgArr[i].id = `img-${i}`;\n        imgArr[i].src = `../src/pics/landscape-${i}.jpg`;\n        imgArr[i].alt = `Example landscape image ${i}`;\n        imgContainer.appendChild(imgArr[i]);\n    }\n}\n\nfunction createNav() {\n    const navContainer = document.querySelector('.nav-container');\n    const imgContainer = document.querySelector('.img-container');\n    const imgArr = Array.from(imgContainer.childNodes);\n    const navNodeArr = [];\n    for (let i = 0; i < imgArr.length; i++) {\n        navNodeArr[i] = document.createElement('div');\n        navNodeArr[i].className = 'nav-node';\n        navNodeArr[i].id = `node-${i}`;\n        navContainer.appendChild(navNodeArr[i]);\n    }\n}\n\n\nfunction setImgDisplay() {\n    const imgContainer = document.querySelector('.img-container');\n    const navContainer = document.querySelector('.nav-container');\n    const imgArr = Array.from(imgContainer.childNodes);\n    const navArr = Array.from(navContainer.childNodes);\n    for (let i = 0; i < imgArr.length; i++) {\n        if (i === 0) {\n            imgArr[i].style.display = 'flex';\n        } else {\n            imgArr[i].style.display = 'none';\n        }\n    }\n    for (let i = 0; i < navArr.length; i++) {\n        if (i === 0) {\n            navArr[i].style.backgroundColor = 'green';\n        }\n    }\n}\n\nfunction linkNav() {\n    const imgContainer = document.querySelector('.img-container');\n    const navContainer = document.querySelector('.nav-container');\n    const imgArr = Array.from(imgContainer.childNodes);\n    const navArr = Array.from(navContainer.childNodes);\n    let navIndex;\n    for (let i = 0; i < navArr.length; i++) {\n        if (navArr[i] === this) {\n            navArr[i].style.backgroundColor = 'green';\n        } else {\n            navArr[i].style.backgroundColor = 'rgb(195, 194, 194)';\n        }\n        if (navArr[i].style.backgroundColor === 'green') {\n            navIndex = i;\n        }\n    }\n    for (let i = 0; i < imgArr.length; i++) {\n        if (imgArr[i].style.display === 'flex') {\n            imgArr[i].style.display = 'none';\n        }\n        if (i === navIndex) {\n            imgArr[i].style.display = 'flex';\n        }\n    }\n}\n\nfunction addLinkEvent() {\n    const navContainer = document.querySelector('.nav-container');\n    const navArr = Array.from(navContainer.childNodes);\n    for (let i = 0; i < navArr.length; i++) {\n        navArr[i].addEventListener('click', linkNav);\n    }\n}\n\nfunction nextNav() {\n    const imgContainer = document.querySelector('.img-container');\n    const navContainer = document.querySelector('.nav-container');\n    const imgArr = Array.from(imgContainer.childNodes);\n    const navArr = Array.from(navContainer.childNodes);\n    let imgIndex;\n    for (let i = 0; i < imgArr.length; i++) {\n        if (imgArr[i].style.display === 'flex') {\n            imgIndex = i;\n        }\n    }\n    for (let i = 0; i < navArr.length; i++) {\n        if (i === imgIndex && i === 0) {\n            navArr[i].style.backgroundColor = 'green';\n            navArr[navArr.length - 1].style.backgroundColor = 'rgb(195, 194, 194)';\n        } else if (i === imgIndex && i > 0) {\n            navArr[i].style.backgroundColor = 'green';\n            navArr[imgIndex - 1].style.backgroundColor = 'rgb(195, 194, 194)';\n        }\n    }\n}\n\nfunction prevNav() {\n    const imgContainer = document.querySelector('.img-container');\n    const navContainer = document.querySelector('.nav-container');\n    const imgArr = Array.from(imgContainer.childNodes);\n    const navArr = Array.from(navContainer.childNodes);\n    let imgIndex;\n    for (let i = 0; i < imgArr.length; i++) {\n        if (imgArr[i].style.display === 'flex') {\n            imgIndex = i;\n        }\n    }\n    for (let i = 0; i < navArr.length; i++) {\n        if (i === imgIndex && i === navArr.length - 1) {\n            navArr[i].style.backgroundColor = 'green';\n            navArr[0].style.backgroundColor = 'rgb(195, 194, 194)';\n        } else if (i === imgIndex && i < navArr.length - 1) {\n            navArr[i].style.backgroundColor = 'green';\n            navArr[imgIndex + 1].style.backgroundColor = 'rgb(195, 194, 194)';\n        }\n    }\n}\n\n\nfunction nextSlide() {\n    const imgContainer = document.querySelector('.img-container');\n    const imgArr = Array.from(imgContainer.childNodes);\n    for (let i = 0; i < imgArr.length; i++) {\n        if (imgArr[i].style.display === 'flex' && !(i === (imgArr.length - 1))) {\n            imgArr[i].style.display = 'none';\n            imgArr[i+=1].style.display = 'flex';\n        } else if (imgArr[i].style.display === 'flex' && i === (imgArr.length - 1)) {\n            imgArr[i].style.display = 'none';\n            imgArr[0].style.display = 'flex';\n        }\n    }\n    nextNav();\n}\n\nfunction prevSlide() {\n    const imgContainer = document.querySelector('.img-container');\n    const imgArr = Array.from(imgContainer.childNodes);\n    for (let i = (imgArr.length - 1); i >= 0; i--) {\n        if (imgArr[i].style.display === 'flex' && i > 0) {\n            imgArr[i].style.display = 'none';\n            imgArr[i-=1].style.display = 'flex';\n        } else if (imgArr[i].style.display === 'flex' && i === 0) {\n            imgArr[i].style.display = 'none';\n            imgArr[imgArr.length - 1].style.display = 'flex';\n        }\n    }\n    prevNav();\n}\n\nfunction setBtnFuncs() {\n    const nextBtn = document.querySelector('#fwd-btn');\n    const prevBtn = document.querySelector('#back-btn');\n    nextBtn.addEventListener('click', nextSlide);\n    prevBtn.addEventListener('click', prevSlide);\n}\n\nfunction autoChangeSlides() {\n    setInterval(nextSlide, '5000');\n}\n\nfunction styleSlider() {\n    const sliderContainer = document.querySelector('.slider-container');\n    sliderContainer.style.display = 'grid';\n    sliderContainer.style.gridTemplateColumns = 'repeat(3, min-content)';\n    sliderContainer.style.alignItems = 'center';\n}\n\nfunction styleButtons() {\n    const backBtn = document.querySelector('#back-btn');\n    const fwdBtn = document.querySelector('#fwd-btn');\n    backBtn.style.width = '40px';\n    backBtn.style.opacity = '0.3';\n    backBtn.style.marginLeft = '5px';\n    fwdBtn.style.width = '40px';\n    fwdBtn.style.opacity = '0.3';\n    fwdBtn.style.marginRight = '5px';\n}\n\nfunction styleImgContainer() {\n    const imgContainer = document.querySelector('.img-container');\n    imgContainer.style.display = 'flex';\n    imgContainer.style.justifyContent = 'center';\n}\n\nfunction styleImages() {\n    const imgContainer = document.querySelector('.img-container');\n    const imgArr = Array.from(imgContainer.childNodes);\n    for (let i = 0; i < imgArr.length; i++) {\n        imgArr[i].style.width = '400px';\n        imgArr[i].style.height = '300px';\n        imgArr[i].style.objectFit = 'contain';\n    }\n}\n\ncreateSlider();\naddImages();\ncreateNav();\naddLinkEvent();\nsetImgDisplay();\nsetBtnFuncs();\n// autoChangeSlides();\n\nstyleSlider();\nstyleButtons();\nstyleImgContainer();\nstyleImages();\n\n//# sourceURL=webpack://@frogheaven/image-slider/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;