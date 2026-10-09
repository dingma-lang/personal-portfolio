(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !reduced.matches) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-revealing');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    reduced.addEventListener('change', () => {
      if (reduced.matches) {
        observer.disconnect();
        document.querySelectorAll('.is-revealing').forEach(el => el.classList.remove('is-revealing'));
      }
    });
  }
  const dialog = document.querySelector('.image-dialog');
  if (dialog && typeof dialog.showModal === 'function') {
    let opener;
    document.querySelectorAll('[data-chart]').forEach(link => {
      link.addEventListener('click', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        opener = link;
        const image = dialog.querySelector('img');
        image.src = link.href;
        image.alt = link.querySelector('img').alt;
        dialog.querySelector('p').textContent = link.dataset.caption;
        dialog.showModal();
        document.body.style.overflow = 'hidden';
      });
    });
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.body.style.overflow = '';
      if (opener) opener.focus();
    });
  }
})();
