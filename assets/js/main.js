import { initBackToTop } from './modules/back-to-top';
import { initCarousels } from './modules/carousel';
import { initFilters } from './modules/filters';
import { initHeader } from './modules/header';
import { initNav } from './modules/nav';
import { initReveal } from './modules/reveal';
import { initTabs } from './modules/tabs';
import { initTheme } from './modules/theme';
import { initTools } from './modules/tools';

const modules = [initTheme, initTools, initNav, initHeader, initReveal, initFilters, initTabs, initCarousels, initBackToTop];

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
