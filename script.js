const toggleBtn = document.querySelector('.theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');

  toggleBtn.classList.add('active');
  setTimeout(() => toggleBtn.classList.remove('active'), 600);
});

// Animation progressive des liens
document.querySelectorAll('.link').forEach((el, i) => {
  el.style.animationDelay = `${0.6 + i * 0.1}s`;
});
