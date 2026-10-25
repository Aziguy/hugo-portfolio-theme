import { get, onChange, set } from './preferences';

const OPTIONS = [
  ['accent', '[data-set-accent]', 'setAccent'],
  ['dir', '[data-set-dir]', 'setDir'],
  ['theme', '[data-set-theme]', 'setTheme'],
];

export function initTools() {
  const panel = document.querySelector('[data-tools]');
  const opener = document.querySelector('[data-tools-open]');
  if (!panel || !opener) return;

  const root = document.documentElement;
  const isOpen = () => root.classList.contains('tools-open');

  const setOpen = (open) => {
    root.classList.toggle('tools-open', open);
    opener.setAttribute('aria-expanded', String(open));
    panel.inert = !open;
    if (open) panel.querySelector('button')?.focus();
    else opener.focus();
  };

  const sync = () =>
    OPTIONS.forEach(([key, selector, data]) => {
      panel.querySelectorAll(selector).forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset[data] === get(key)));
      });
    });

  OPTIONS.forEach(([key, selector, data]) => {
    panel.querySelectorAll(selector).forEach((button) => {
      button.addEventListener('click', () => set(key, button.dataset[data]));
    });
  });

  panel.inert = true;
  opener.addEventListener('click', () => setOpen(true));
  document.querySelectorAll('[data-tools-close]').forEach((el) => el.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) setOpen(false);
  });

  onChange(sync);
  sync();
}
