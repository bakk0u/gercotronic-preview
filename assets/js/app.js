// Footer year
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

// Highlight active nav on subpages (simple path match)
(function navActive(){
  const nav = document.querySelector('.nav'); if (!nav) return;
  const path = location.pathname.replace(/\/+$/, '');
  [...nav.querySelectorAll('a')].forEach(a => {
    const href = new URL(a.getAttribute('href'), location.origin).pathname.replace(/\/+$/, '');
    if (href === path || (href.endsWith('/index.html') && (path.endsWith('/') || path.endsWith('/index.html')))) {
      a.classList.add('active');
    }
  });
})();
