// year stamp
document.querySelectorAll('#year').forEach(n => {
  n.textContent = new Date().getFullYear();
});

// mobile nav (guarded)
const toggle = document.querySelector('.nav-toggle');
const list = document.getElementById('nav-list');

function setOpen(open) {
  if (!toggle || !list) return;
  list.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
}

if (toggle && list) {
  toggle.addEventListener('click', () => {
    setOpen(!list.classList.contains('open'));
  });
  // close on link click
  list.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => setOpen(false))
  );
  // outside click
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (!t) return;
    if (toggle.contains(t) || list.contains(t)) return;
    setOpen(false);
  });
  // Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
}

// auto mark current page in header nav
const here = location.pathname.replace(/\/index\.html$/, '/');
document.querySelectorAll('.main-nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (!href) return;
  const url = new URL(href, location.href);
  const apath = url.pathname.replace(/\/index\.html$/, '/');
  if (apath === here && (!url.hash || url.hash === location.hash)) {
    a.setAttribute('aria-current', 'page');
  }
});
