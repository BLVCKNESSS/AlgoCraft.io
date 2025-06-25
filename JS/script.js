// Fonction pour afficher ou masquer le menu sur mobile
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}


// Quand le formulaire est soumis
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Empêche l'envoi classique

  // Récupère la valeur saisie
  const message = document.getElementById('message').value.trim();

  // Si le message n'est pas vide
  if (message) {
    // Numéro WhatsApp au format international sans le "+"
    const phoneNumber = "237683777399"; // ← Remplace par ton numéro

    // Encode le message pour qu’il soit compatible URL
    const encodedMessage = encodeURIComponent(message);

    // Crée l’URL WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Ouvre WhatsApp dans un nouvel onglet
    window.open(url, '_blank');

    // Vide le formulaire après l'envoi
    this.reset();
  } else {
    alert("Veuillez écrire un message avant d’envoyer.");
  }
});

// carousel
const phrases = [
  "Une approche réaliste et pédagogique de l'algorithmique",
  "Un apprentissage centré sur la logique, pas sur les problèmes de syntaxe",
  "Facile à utiliser pour les élèves et étudiants",
  "100% conforme aux programmes scolaires",
  "Compatible sur Windows"
];

let currentIndex = 0;
const textElement = document.getElementById("carousel-text");

function updateText() {
  textElement.style.opacity = 0;
  setTimeout(() => {
    textElement.textContent = phrases[currentIndex];
    textElement.style.opacity = 1;
  }, 300);
}

function changeSlide(direction) {
  currentIndex = (currentIndex + direction + phrases.length) % phrases.length;
  updateText();
}

// Initialisation
updateText();
