function nextSlide() {
    const imgContainer = document.querySelector('.img-container');
    console.log(Array.from(imgContainer.childNodes));   
}

function setBtnFuncs() {
    const nextBtn = document.querySelector('#fwd-btn');
    nextBtn.addEventListener('click', nextSlide);
}

setBtnFuncs();