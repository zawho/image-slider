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

eval("function setImgDisplay() {\n    const imgContainer = document.querySelector('.img-container');\n    const navContainer = document.querySelector('.nav-container');\n    const imgArr = Array.from(imgContainer.childNodes);\n    const navArr = Array.from(navContainer.childNodes);\n    for (let i = 0; i < imgArr.length; i++) {\n        if (i === 0) {\n            imgArr[i].style.display = 'flex';\n        } else {\n            imgArr[i].style.display = 'none';\n        }\n    }\n    for (let i = 0; i < navArr.length; i++) {\n        if (i === 0) {\n            navArr[i].style.backgroundColor = 'green';\n        }\n    }\n}\n\nfunction highlightNav() {\n    const imgContainer = document.querySelector('.img-container');\n    const navContainer = document.querySelector('.nav-container');\n    const imgArr = Array.from(imgContainer.childNodes);\n    const navArr = Array.from(navContainer.childNodes);\n    let imgIndex;\n    for (let i = 0; i < imgArr.length; i++) {\n        if (imgArr[i].style.display === 'flex') {\n            imgIndex = i;\n        }\n    }\n    for (let i = 0; i < navArr.length; i++) {\n        if (i === imgIndex && i > 0) {\n            navArr[i].style.backgroundColor = 'green';\n            // navArr[i-=1].style.backgroundColor = 'rgb(195, 194, 194)';\n        }\n    }\n}\n\nfunction nextSlide() {\n    const imgContainer = document.querySelector('.img-container');\n    const imgArr = Array.from(imgContainer.childNodes);\n    for (let i = 0; i < imgArr.length; i++) {\n        if (imgArr[i].style.display === 'flex' && !(i === (imgArr.length - 1))) {\n            imgArr[i].style.display = 'none';\n            imgArr[i+=1].style.display = 'flex';\n        } else if (imgArr[i].style.display === 'flex' && i === (imgArr.length - 1)) {\n            imgArr[i].style.display = 'none';\n            imgArr[0].style.display = 'flex';\n        }\n    }\n    highlightNav();\n}\n\nfunction prevSlide() {\n    const imgContainer = document.querySelector('.img-container');\n    const imgArr = Array.from(imgContainer.childNodes);\n    for (let i = (imgArr.length - 1); i >= 0; i--) {\n        if (imgArr[i].style.display === 'flex' && i > 0) {\n            imgArr[i].style.display = 'none';\n            imgArr[i-=1].style.display = 'flex';\n        } else if (imgArr[i].style.display === 'flex' && i === 0) {\n            imgArr[i].style.display = 'none';\n            imgArr[imgArr.length - 1].style.display = 'flex';\n        }\n    }\n}\n\nfunction setBtnFuncs() {\n    const nextBtn = document.querySelector('#fwd-btn');\n    const prevBtn = document.querySelector('#back-btn');\n    nextBtn.addEventListener('click', nextSlide);\n    prevBtn.addEventListener('click', prevSlide);\n}\n\nsetImgDisplay();\nsetBtnFuncs();\n\n//# sourceURL=webpack://@frogheaven/image-slider/./src/index.js?");

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