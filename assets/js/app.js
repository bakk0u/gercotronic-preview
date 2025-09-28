// Year in footer
const y = document.getElementById('y'); if (y) y.textContent = new Date().getFullYear();

// Respect smooth scrolling everywhere
document.documentElement.style.scrollBehavior = 'smooth';

// Optional: highlight current nav item if the link equals current path
(function highlightActiveNav(){
  const nav = document.querySelector('.nav'); if (!nav) return;
  const here = location.pathname.replace(/\/+$/, '');
  [...nav.querySelectorAll('a')].forEach(a => {
    const link = new URL(a.getAttribute('href'), location.origin).pathname.replace(/\/+$/, '');
    if (link === here || (here.endsWith('/') && link.endsWith('/index.html'))) a.classList.add('active');
  });
})();
