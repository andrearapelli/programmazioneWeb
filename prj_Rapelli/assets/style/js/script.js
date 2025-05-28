// script.js
// Seleziona l'elemento con classe 'hamburger' 
let hamburger = document.querySelector('.hamburger');

// Aggiunge un event listener al clic sul pulsante hamburger
hamburger.addEventListener("click", function () {
    // Quando cliccato, alterna la classe 'open' sul body
    // Serve per aprire/chiudere il menu mobile
    document.body.classList.toggle('open');
});


// Seleziona tutti gli elementi con classe 'card__text'
const cards = document.querySelectorAll('.card__text');

// Serve per osservare quando un elemento entra nella viewport (visibile all'utente)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // Se l'elemento è visibile
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.8 }); //  quanto deve essere visibile l'elemento per attivazione

cards.forEach(card => {
    observer.observe(card);
});