// Footer year
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

// Mark active nav (basic path match)
(function(){
  const nav = document.querySelector('.nav'); if(!nav) return;
  const here = location.pathname.replace(/\/+$/,'');
  [...nav.querySelectorAll('a')].forEach(a=>{
    const path = new URL(a.getAttribute('href'), location.origin).pathname.replace(/\/+$/,'');
    if (path === here || (path.endsWith('/index.html') && (here.endsWith('/') || here.endsWith('/index.html')))) {
      a.classList.add('active');
    }
  });
})();
