
function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('show');   // <‑‑ ajoute ou enlève .show
}

/* -------------------------------------------------
   2️⃣ NAVBAR – show / hide selon le sens du scroll
   ------------------------------------------------- */
let lastScrollY = window.pageYOffset;
let ticking    = false;

function handleScroll() {
    const currentY = window.pageYOffset;
    const navbar   = document.querySelector('.navbar');

    // Au tout‑top ⇒ toujours visible
    if (currentY <= 0) {
        navbar.classList.remove('hidden');
        lastScrollY = 0;
        return;
    }

    // Descendre → masquer, remonter → montrer
    if (currentY > lastScrollY) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }

    lastScrollY = currentY;
}

/* RequestAnimationFrame = meilleur rendu */
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
});


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


// Configuration du carousel
const carouselTexts = [
  "🚀 Interface intuitive et moderne",
  "🧮 17 fonctions mathématiques intégrées",
  "🌍 Traduction vers 4 langages de programmation",
  "💡 Auto-complétion intelligente avec 47 suggestions",
  "🎨 Thèmes personnalisables (Blue Night, Black, White)",
  "📤 Partage facile sur les réseaux sociaux",
  "💾 Gestion avancée des projets",
  "🔧 Interpréteur pseudo-code performant",
  "📊 Coloration syntaxique en temps réel",
  "🔄 Système de règles de traduction extensible",
  "💾 Sauvegarde automatique et sécurisée",
  "📱 Interface responsive et adaptative",
  "🎯 Apprentissage progressif de l'algorithmique",
  "🔍 Débogage avancé avec messages explicites",
  "🌟 Développé par des étudiants pour les étudiants"
];

let currentSlide = 0;
let autoSlideInterval;

// Fonction pour changer de slide
function changeSlide(direction) {
  // Réinitialiser le timer à chaque interaction manuelle
  resetAutoSlide();
  
  currentSlide += direction;
  
  // Gérer les limites
  if (currentSlide < 0) {
    currentSlide = carouselTexts.length - 1;
  } else if (currentSlide >= carouselTexts.length) {
    currentSlide = 0;
  }
  
  updateCarousel();
}

// Fonction pour mettre à jour l'affichage
function updateCarousel() {
  const carouselTextElement = document.getElementById('carousel-text');
  if (carouselTextElement) {
    carouselTextElement.textContent = carouselTexts[currentSlide];
    
    // Animation de fondu
    carouselTextElement.style.opacity = '0';
    setTimeout(() => {
      carouselTextElement.style.opacity = '1';
    }, 300);
  }
}

// Fonction pour le défilement automatique
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % carouselTexts.length;
    updateCarousel();
  }, 10000); // 10 secondes
}

// Fonction pour réinitialiser le défilement automatique
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  // Afficher le premier texte
  updateCarousel();
  
  // Démarrer le défilement automatique après 10 secondes
  setTimeout(() => {
    startAutoSlide();
  }, 10000);
  
  // Pause au survol pour une meilleure UX
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', () => {
      clearInterval(autoSlideInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
      startAutoSlide();
    });
  }
});

// Nettoyage quand la page est quittée
window.addEventListener('beforeunload', () => {
  clearInterval(autoSlideInterval);
});



// mise a jour 
// git add .
// git commit -m "Mise à jour du site"
// git push