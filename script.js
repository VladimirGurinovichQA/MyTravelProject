'use strict';

//slider

let offset = 0;
const sliderLine = document.querySelector('.feedback-list');

document.querySelector('.next-feedback').addEventListener('click', function() {
    offset += 469;
    if (offset > 1407) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.prev-feedback').addEventListener('click', function() {
    offset += 469;
    if (offset < 0) {
        offset = 1164;
    }
    sliderLine.style.left = offset + 'px';
});
