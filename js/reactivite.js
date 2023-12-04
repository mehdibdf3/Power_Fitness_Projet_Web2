function applyStylesForSmallScreens() {
    // Application des style pour la class  '.tarif' 
    var tarifElements = document.querySelectorAll('.tarif');
    tarifElements.forEach(function(elem) {
        elem.style.width = '100%';
    });

    // Application des style pour la class '.services-section' 
    var servicesSectionElements = document.querySelectorAll('.services-section');
    servicesSectionElements.forEach(function(elem) {
        elem.style.display = 'block';
    });

    // Application des style pour la class '.service-item' 
    var serviceItemElements = document.querySelectorAll('.service-item');
    serviceItemElements.forEach(function(elem) {
        elem.style.position = 'relative';
        elem.style.marginBottom = '20px';
    });

    // Application des style pour la class '.service-item img'
    var serviceItemImageElements = document.querySelectorAll('.service-item img');
    serviceItemImageElements.forEach(function(elem) {
        elem.style.width = '100%';
        elem.style.height = 'auto';
        elem.style.display = 'block';
    });

    // Application des style pour '.service-item p'
    var serviceItemPElements = document.querySelectorAll('.service-item p');
    serviceItemPElements.forEach(function(elem) {
        elem.style.position = 'absolute';
        elem.style.bottom = '0';
        elem.style.left = '0';
        elem.style.width = '100%';
        elem.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        elem.style.color = 'white';
        elem.style.textAlign = 'center';
        elem.style.padding = '5px 0';
    });
}

function applyStylesBasedOnWidth() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        applyStylesForSmallScreens();
    }
}

// ajout d'event listener pour resizevla fenetre
window.addEventListener('resize', applyStylesBasedOnWidth);

// Application des style pour l'initialisation de base
applyStylesBasedOnWidth();
