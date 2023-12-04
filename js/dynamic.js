document.addEventListener('DOMContentLoaded', function() {
    // Changement de couleur des boutons et des liens au survol
    const buttons = document.querySelectorAll('button, a');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.color = 'orange'; 
        });
        button.addEventListener('mouseout', () => {
            button.style.color = '';
        });
    });

    // Animation de texte au chargement de la page ou lors du défilement
    const animateText = () => {
        const texts = document.querySelectorAll('.animate-text');
        texts.forEach(text => {
            text.classList.add('slide-in-animation');
        });
    };
    window.onload = animateText;
    window.onscroll = animateText;

    // Effet de zoom sur les images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.5s ease';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = '';
        });
    });

    // Ajusteur de taille de police pour l'accessibilité
    const fontSizeAdjuster = document.querySelector('#font-size-adjuster');
    if (fontSizeAdjuster) {
        fontSizeAdjuster.addEventListener('input', (event) => {
            document.body.style.fontSize = event.target.value + 'px';
        });
    }

    // Animations d'arrière-plan (ex : Changement de couleur de fond d'une section)
    const bgSection = document.querySelector('.background-animate');
    if (bgSection) {
        bgSection.addEventListener('mouseover', () => {
            bgSection.style.background = 'lightblue'; // Change as needed
        });
        bgSection.addEventListener('mouseout', () => {
            bgSection.style.background = ''; // Resets to original color
        });
    }

    // Validations de formulaires (exemple pour un formulaire de contact)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent form submission if validation fails
            // Implement validation logic here
        });
    }

    // Démarrer l'animation
    const intervalId = setInterval(animateTarifs, 3000);
});
document.addEventListener("DOMContentLoaded", function() {
    // Select all section elements
    var sections = document.querySelectorAll('section');

    // Function pour anime les section
    function animateSections() {
        sections.forEach(function(section, index) {
            // Delay each section's animation slightly for a staggered effect
            setTimeout(function() {
                section.style.opacity = '1';
                section.style.transform = 'translateX(0)';
            }, 100 * index);
        });
    }

    // appel de la fonction 
    animateSections();
});
