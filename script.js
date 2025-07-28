const toggleBtn = document.querySelector('.theme-toggle');
const videoNight = document.getElementById('video-night');
const videoDay = document.getElementById('video-day');

toggleBtn.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');

  toggleBtn.classList.add('active');
  setTimeout(() => toggleBtn.classList.remove('active'), 600);

  if (isLight) {
    // Activer le mode JOUR
    videoNight.classList.remove('visible');
    videoNight.classList.add('hidden');
    videoDay.classList.remove('hidden');
    videoDay.classList.add('visible');
    videoDay.play();
  } else {
    // Activer le mode NUIT
    videoDay.classList.remove('visible');
    videoDay.classList.add('hidden');
    videoNight.classList.remove('hidden');
    videoNight.classList.add('visible');
    videoNight.play();
  }
});

// Animation progressive des liens
document.querySelectorAll('.link').forEach((el, i) => {
  el.style.animationDelay = `${0.6 + i * 0.1}s`;
});
