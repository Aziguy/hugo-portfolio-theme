// Filtres par catégorie et pagination côté navigateur. Sans JavaScript, tout reste affiché.
export function initFilters() {
  document.querySelectorAll('[data-filter-scope]').forEach((scope) => {
    const buttons = [...scope.querySelectorAll('[data-filter]')];
    const items = [...scope.querySelectorAll('[data-filter-items] > [data-categories]')];
    const empty = scope.querySelector('[data-filter-empty]');
    const status = scope.querySelector('[data-filter-status]');
    const pager = scope.querySelector('[data-pager]');
    const size = Number(scope.dataset.pageSize) || 0;
    if (!items.length || (!buttons.length && !size)) return;

    const icon = (name) => pager?.querySelector(`[data-icon-${name}]`)?.innerHTML ?? '';
    const icons = { prev: icon('prev'), next: icon('next') };
    let filter = '*';
    let page = 1;

    const button = (label, target, attrs = {}) => {
      const el = document.createElement('button');
      el.type = 'button';
      el.className = attrs.className ?? 'pagination__page';
      el.innerHTML = label;
      if (attrs.ariaLabel) el.setAttribute('aria-label', attrs.ariaLabel);
      if (attrs.current) el.setAttribute('aria-current', 'page');
      if (target === null) el.disabled = true;
      else
        el.addEventListener('click', () => {
          page = target;
          render();
          scope.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      return el;
    };

    const renderPager = (pages) => {
      if (!pager) return;
      pager.hidden = pages <= 1;
      pager.replaceChildren();
      if (pages <= 1) return;
      const { labelPrev, labelNext, labelPage, labelSummary } = pager.dataset;
      const list = document.createElement('ol');
      list.className = 'pagination__pages';
      for (let n = 1; n <= pages; n += 1) {
        const li = document.createElement('li');
        li.append(button(String(n), n, { ariaLabel: labelPage.replace('%d', n), current: n === page }));
        list.append(li);
      }
      const summary = document.createElement('p');
      summary.className = 'pagination__summary';
      summary.textContent = labelSummary.replace('%c', page).replace('%t', pages);
      pager.append(
        button(`${icons.prev}<span>${labelPrev}</span>`, page > 1 ? page - 1 : null, { className: 'pagination__link' }),
        list,
        button(`<span>${labelNext}</span>${icons.next}`, page < pages ? page + 1 : null, { className: 'pagination__link' }),
        summary,
      );
    };

    const render = () => {
      const matches = items.filter((item) => filter === '*' || item.dataset.categories.split(' ').includes(filter));
      const pages = size ? Math.max(1, Math.ceil(matches.length / size)) : 1;
      page = Math.min(page, pages);
      items.forEach((item) => (item.hidden = true));
      matches.forEach((item, index) => (item.hidden = size > 0 && Math.floor(index / size) + 1 !== page));
      buttons.forEach((btn) => btn.setAttribute('aria-pressed', String(btn.dataset.filter === filter)));
      if (empty) empty.hidden = matches.length > 0;
      if (status) status.textContent = String(matches.length);
      renderPager(pages);
    };

    buttons.forEach((btn) =>
      btn.addEventListener('click', () => {
        filter = btn.dataset.filter;
        page = 1;
        render();
      }),
    );
    render();
  });
}
