document.addEventListener('DOMContentLoaded', (e) => {
    const header = document.querySelector('.header');
    const rect = header.getBoundingClientRect();

    const slider = document.querySelector('.slider');
    slider.style.top = '-' + rect.height + 'px';

    console.log(slider);

    console.log('Width: ', rect.width);
    console.log('Height: ', rect.height);
})