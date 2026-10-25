const STORAGE_KEY = 'theme';
const root = document.documentElement;

const store = (value) => {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Stockage indisponible : le choix vaut pour la session.
  }
};

const hasStoredChoice = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) !== null;
  } catch {
    return false;
  }
};

export function initTheme() {
  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      store(next);
    });
  });

  // Suit le système tant que le visiteur n'a rien choisi.
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (!hasStoredChoice()) root.dataset.theme = event.matches ? 'dark' : 'light';
  });
}
