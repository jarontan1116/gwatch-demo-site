
const yearEl = document.getElementById('year');
if (yearEl) { yearEl.textContent = '\u00a9 ' + new Date().getFullYear() + ' G Watch Sdn Bhd'; }

const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const navToggle = document.getElementById('navToggle');
const mobilePanel = document.getElementById('mobilePanel');
if (navToggle && mobilePanel) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobilePanel.style.display === 'flex';
    mobilePanel.style.display = isOpen ? 'none' : 'flex';
  });
  document.addEventListener('click', (e) => {
    if (mobilePanel.style.display === 'flex' && !mobilePanel.contains(e.target) && e.target !== navToggle) {
      mobilePanel.style.display = 'none';
    }
  });
}

const tabsEl = document.getElementById('tabs');
if (tabsEl) {
  const buttons = tabsEl.querySelectorAll('.tab');
  const cards = document.querySelectorAll('#collectionGrid [data-brand]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const brand = btn.dataset.brand;
      cards.forEach(c => {
        c.style.display = (brand === 'All' || c.dataset.brand === brand) ? '' : 'none';
      });
    });
  });
}
