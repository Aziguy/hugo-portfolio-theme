import { initCarousels } from './modules/carousel';
import { initFilters } from './modules/filters';
import { initHeader } from './modules/header';
import { initNav } from './modules/nav';
import { initReveal } from './modules/reveal';
import { initTheme } from './modules/theme';

const modules = [initTheme, initNav, initHeader, initReveal, initFilters, initCarousels];

// Un module en échec ne bloque pas les autres.
const start = () =>
  modules.forEach((init) => {
    try {
      init();
    } catch (error) {
      console.error(`[theme] ${init.name}`, error);
    }
  });

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}
