// Affiche le bouton après un écran défilé et trace la progression de lecture.
export function initBackToTop() {
  const button = document.querySelector('[data-back-to-top]');
  if (!button) return;

  let ticking = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    button.style.setProperty('--progress', progress.toFixed(3));
    button.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.6);
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}
