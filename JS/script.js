// Fonction pour afficher ou masquer le menu sur mobile
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}


document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const message = document.getElementById('userMessage').value.trim();

  if (message) {
    const phoneNumber = "237683777399";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, '_blank');
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


// mise a jour 
// git add .
// git commit -m "Mise à jour du site"
// git push