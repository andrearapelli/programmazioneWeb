// script.js
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener("click", function () {
    document.body.classList.toggle('open');
});


const cards = document.querySelectorAll('.card__text');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.8 });

cards.forEach(card => {
    observer.observe(card);
});