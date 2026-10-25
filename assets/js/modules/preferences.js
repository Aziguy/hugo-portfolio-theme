// Préférences d'affichage mémorisées : thème, couleur d'accent, sens d'écriture.
const root = document.documentElement;

export function read(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Stockage indisponible : le choix vaut pour la session.
  }
}

const getters = {
  theme: () => root.dataset.theme,
  accent: () => root.dataset.accent,
  dir: () => root.dir || 'ltr',
};

const setters = {
  theme: (value) => (root.dataset.theme = value),
  accent: (value) => (root.dataset.accent = value),
  dir: (value) => (root.dir = value),
};

const listeners = new Set();

export const get = (key) => getters[key]();

export function set(key, value) {
  setters[key](value);
  write(key, value);
  listeners.forEach((listener) => listener(key, value));
}

export const onChange = (listener) => listeners.add(listener);
