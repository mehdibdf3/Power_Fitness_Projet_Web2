document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('membershipForm');

    form.addEventListener('submit', function (event) {
        let isFormValid = true;

        // Validation du nom
        const name = document.getElementById('in_Name');
        if (!isLettersOnly(name.value)) {
            showError(name, 'Le nom doit contenir uniquement des lettres');
            isFormValid = false;
        } else {
            clearError(name);
        }

        // Validation du prénom
        const firstName = document.getElementById('in_FirstName');
        if (!isLettersOnly(firstName.value)) {
            showError(firstName, 'Le prénom doit contenir uniquement des lettres');
            isFormValid = false;
        } else {
            clearError(firstName);
        }

        // Validation de l'email
        const email = document.getElementById('in_Email');
        if (!isValidEmail(email.value)) {
            showError(email, 'Veuillez entrer un email valide');
            isFormValid = false;
        } else {
            clearError(email);
        }

        // Validation du numéro de téléphone
        const phone = document.getElementById('in_Phone');
        if (!isValidPhone(phone.value)) {
            showError(phone, 'Le numéro de téléphone doit contenir 10 chiffres');
            isFormValid = false;
        } else {
            clearError(phone);
        }

        
        // Empêcher la soumission du formulaire si non valide
        if (!isFormValid) {
            event.preventDefault();
        }
         // Validation du message
         const message = document.getElementById('message');
         if (message.value.trim() === '') {
             showError(message, 'Le message ne peut pas être vide');
             isFormValid = false;
         } else {
             clearError(message);
         }
 
    });

    function showError(input, message) {
        const parent = input.parentElement;
        parent.classList.add('error');
        const error = document.createElement('div');
        error.className = 'erreur';
        error.textContent = message;
        if (parent.querySelector('.erreur') == null) {
            parent.appendChild(error);
        }
    }

    function clearError(input) {
        const parent = input.parentElement;
        const error = parent.querySelector('.erreur');
        if (error) {
            parent.removeChild(error);
        }
        parent.classList.remove('error');
    }

    function isLettersOnly(string) {
        return /^[a-zA-ZÀ-ÿ\s-]+$/.test(string);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        return /^\d{10}$/.test(phone);
    }
});
