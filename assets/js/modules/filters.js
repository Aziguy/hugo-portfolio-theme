export function initFilters() {
  document.querySelectorAll('[data-filter-scope]').forEach((scope) => {
    const buttons = scope.querySelectorAll('[data-filter]');
    const items = scope.querySelectorAll('[data-filter-items] > [data-categories]');
    const empty = scope.querySelector('[data-filter-empty]');
    const status = scope.querySelector('[data-filter-status]');
    if (!buttons.length) return;

    const apply = (filter) => {
      let visible = 0;
      items.forEach((item) => {
        const match = filter === '*' || item.dataset.categories.split(' ').includes(filter);
        item.hidden = !match;
        if (match) visible += 1;
      });
      buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
      if (empty) empty.hidden = visible > 0;
      if (status) status.textContent = String(visible);
    };

    buttons.forEach((button) => button.addEventListener('click', () => apply(button.dataset.filter)));
  });
}
