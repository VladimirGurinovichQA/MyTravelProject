'use strict';

//slider

let offset = 0;
const sliderLine = document.querySelector('.feedback-list'),
    nextButton = document.querySelector('.next-feedback'),
    prevButton = document.querySelector('.prev-feedback'),
    feedbackItem = document.querySelectorAll('.feedback-item');


nextButton.addEventListener('click', function() {
    offset += 468;
    if (offset > 1404) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

prevButton.addEventListener('click', function() {
    offset -= 468;
    if (offset < 0) {
        offset = 1404;
    }
    sliderLine.style.left = -offset + 'px';
});

//information. Open/close button

const plusButton = document.querySelectorAll('.information-item .button'),
        textElement = document.querySelectorAll('.information-item p');


plusButton.forEach((el, i) => {    
    el.addEventListener('click', () => {
        if (el.classList.contains('Opened')) {
            el.style.setProperty('--transform', 'rotate(90deg)');
            el.classList.remove('Opened');
            textElement[i].classList.add('visualy-hidden');
        } else {
            el.style.setProperty('--transform', 'rotate(180deg)');
            el.classList.add('Opened');
            textElement[i].classList.remove('visualy-hidden');
        }
    });
})

