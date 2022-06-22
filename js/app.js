const slideContainer = document.querySelector('.slider-container');
const sliderRight = document.querySelector('.right-slider');
const sliderLeft = document.querySelector('.left-slider');
const slidesLength = sliderRight.querySelectorAll('div').length;
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

let activeSlide = 0;

sliderLeft.style.top = ` -${(slidesLength - 1) * 100}vh `

upButton.addEventListener('click', () => changeSlides('up'));
downButton.addEventListener('click', () => changeSlides('down'));

const changeSlides = (direction) => {
    const slideHeight = slideContainer.clientHeight;

    if(direction === 'up') {
        activeSlide++
        if(activeSlide > slidesLength - 1) {
            activeSlide = 0
        }
    } else if(direction === 'down') {
        activeSlide-- 
        if(activeSlide < 0) {
            activeSlide = slidesLength - 1
        }
    }

    sliderRight.style.transform = `translateY(-${activeSlide * slideHeight}px)`;
    sliderLeft.style.transform = `translateY(${activeSlide * slideHeight}px)`;
}

