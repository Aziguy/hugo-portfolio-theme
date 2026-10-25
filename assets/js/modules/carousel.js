export function initCarousels() {
  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('[data-carousel-track]');
    const prev = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    if (!track || !prev || !next) return;

    // En RTL, scrollLeft est négatif : on raisonne en valeur absolue.
    const rtl = getComputedStyle(track).direction === 'rtl';
    const step = () => track.clientWidth * 0.9 * (rtl ? -1 : 1);

    const update = () => {
      const position = Math.abs(track.scrollLeft);
      const max = track.scrollWidth - track.clientWidth - 1;
      prev.disabled = position <= 1;
      next.disabled = position >= max;
    };

    prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  });
}
