// year stamp
document.querySelectorAll('#year').forEach(n => n.textContent = new Date().getFullYear());

// mobile nav
const toggle = document.querySelector('.nav-toggle');
const list = document.getElementById('nav-list');
toggle?.addEventListener('click', () => {
  const open = list.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
