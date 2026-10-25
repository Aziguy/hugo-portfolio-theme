// Onglets accessibles (motif ARIA tablist) : clic, flèches, Début et Fin.
export function initTabs() {
  document.querySelectorAll('[data-tabs]').forEach((scope) => {
    const tabs = [...scope.querySelectorAll('[role="tab"]')];
    if (!tabs.length) return;

    const select = (tab, focus = true) => {
      tabs.forEach((other) => {
        const selected = other === tab;
        other.setAttribute('aria-selected', String(selected));
        other.tabIndex = selected ? 0 : -1;
        document.getElementById(other.getAttribute('aria-controls')).hidden = !selected;
      });
      if (focus) tab.focus();
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => select(tab, false));
      tab.addEventListener('keydown', (event) => {
        const last = tabs.length - 1;
        const rtl = getComputedStyle(tab).direction === 'rtl';
        const step = { ArrowRight: rtl ? -1 : 1, ArrowLeft: rtl ? 1 : -1 }[event.key];
        let next = null;
        if (step) next = tabs[(index + step + tabs.length) % tabs.length];
        if (event.key === 'Home') next = tabs[0];
        if (event.key === 'End') next = tabs[last];
        if (next) {
          event.preventDefault();
          select(next);
        }
      });
    });
  });
}
