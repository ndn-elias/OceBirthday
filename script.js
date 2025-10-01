document.addEventListener("DOMContentLoaded", function () {
  const surpriseButton = document.getElementById("surprise-button");
  const videoContainer = document.querySelector(".video-container");
  const birthdayVideo = document.getElementById("birthday-video");
  const confettiContainer = document.querySelector(".confetti-container");

  // Fonction pour créer des confettis
  function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9a9e', '#fad0c4'];
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    // Position aléatoire
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = `${Math.random() * -10}px`;

    // Couleur aléatoire
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Animation aléatoire
    confetti.style.animationDuration = `${3 + Math.random() * 2}s`;

    confettiContainer.appendChild(confetti);

    // Supprimer le confetti après l'animation
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }

  // Fonction pour démarrer l'animation de confettis
  function startConfetti() {
    const interval = setInterval(createConfetti, 100);

    // Arrêter après 10 secondes
    setTimeout(() => {
      clearInterval(interval);
    }, 10000);
  }

  surpriseButton.addEventListener("click", function () {
    videoContainer.classList.remove("hidden");
    birthdayVideo.play();
    surpriseButton.style.display = "none"; // Optionnel : masquer le bouton après clic
    startConfetti();
  });
});
