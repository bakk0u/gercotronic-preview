// app.js

// Year in footer
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

// Smooth scrolling
document.documentElement.style.scrollBehavior = 'smooth';

// Get all nav links that contain a hash (section anchors)
const nav = document.querySelector('.nav');
if (nav) {
  const linksWithHash = [...nav.querySelectorAll('a')].filter(a => a.hash);

  // Prevent errors on pages without those sections
  const sections = linksWithHash
    .map(a => document.getElementById(a.hash.slice(1)))
    .filter(Boolean);

  function setActive(id) {
    linksWithHash.forEach(a => {
      a.classList.toggle('active', a.hash === `#${id}`);
    });
  }

  // Highlight active section on scroll (only if sections exist)
  if (sections.length) {
    window.addEventListener('scroll', () => {
      const yPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (yPos >= s.offsetTop) {
          setActive(s.id);
          break;
        }
      }
    });
  }
}

// Contact form (Formspree example; keep if you connected it)
const form = document.querySelector('.contact-form');
if (form) {
  const statusEl = form.querySelector('.form-status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = 'Sending…';
    try {
      const r = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' }});
      if (r.ok) { form.reset(); statusEl.textContent = 'Thanks — we’ll reply within 1 business day.'; }
      else { statusEl.textContent = 'Oops, something went wrong. Please email us directly.'; }
    } catch { statusEl.textContent = 'Network error. Please email us directly.'; }
  });
}
