import { get, read, set } from './preferences';

export function initTheme() {
  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => set('theme', get('theme') === 'dark' ? 'light' : 'dark'));
  });

  // Suit le système tant que le visiteur n'a rien choisi.
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (!read('theme')) document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
  });
}
