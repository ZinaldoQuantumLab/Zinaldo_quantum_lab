/* =============================================
   ZINALDO PORTFOLIO — main.js
   ============================================= */

// ── CUSTOM CURSOR ──────────────────────────────
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

function lerpCursor() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top  = ry + 'px';
  requestAnimationFrame(lerpCursor);
}
lerpCursor();

// Cursor grow on hover
document.querySelectorAll('a, button, .skill-card, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width            = '20px';
    cursor.style.height           = '20px';
    cursorRing.style.width        = '60px';
    cursorRing.style.height       = '60px';
    cursorRing.style.borderColor  = 'var(--gold)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width            = '12px';
    cursor.style.height           = '12px';
    cursorRing.style.width        = '36px';
    cursorRing.style.height       = '36px';
    cursorRing.style.borderColor  = 'var(--red)';
  });
});

// ── SCROLL REVEAL ──────────────────────────────
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = (i % 4 * 0.1) + 's';
      entry.target.classList.add('visible');

      // Animate skill bars when their card becomes visible
      entry.target.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.width = (bar.dataset.pct * 100) + '%';
        bar.classList.add('animated');
      });
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => revealObserver.observe(el));

// ── PARALLAX GEARS ─────────────────────────────
document.addEventListener('mousemove', e => {
  const gears = document.querySelectorAll('.gear-svg');
  const cx    = window.innerWidth  / 2;
  const cy    = window.innerHeight / 2;
  const dx    = (e.clientX - cx) / cx;
  const dy    = (e.clientY - cy) / cy;

  gears.forEach((g, i) => {
    const strength = (i + 1) * 8;
    g.style.marginLeft = (dx * strength) + 'px';
    g.style.marginTop  = (dy * strength) + 'px';
  });
});

// ── NAV ACTIVE LINK ON SCROLL ──────────────────
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  sections.forEach(s => {
    const top    = s.offsetTop - 100;
    const bottom = top + s.offsetHeight;
    const link   = document.querySelector(`.nav-links a[href="#${s.id}"]`);

    if (link) {
      link.style.color = (scrollY >= top && scrollY < bottom)
        ? 'var(--gold-bright)'
        : '';
    }
  });
});

// ── PROJECT IMAGE FALLBACK ──────────────────────
// Si une image projet est manquante, affiche un placeholder stylisé
document.querySelectorAll('.project-image').forEach(img => {
  img.addEventListener('error', function () {
    const thumb = this.closest('.project-thumb');
    if (!thumb) return;

    // Récupère le nom du projet pour afficher une icône adaptée
    const card  = this.closest('.project-card');
    const title = card ? card.querySelector('.project-name')?.textContent || '' : '';

    const icons = {
      'commerce': '🛒',
      'portfolio': '🎨',
      'mobile': '📱',
      'pwa': '📱',
      'corporate': '🏢',
      'interactive': '🎮',
    };

    let icon = '⚙';
    Object.entries(icons).forEach(([key, val]) => {
      if (title.toLowerCase().includes(key)) icon = val;
    });

    // Remplace l'image par un thumb stylisé
    this.remove();
    thumb.innerHTML = `
      <div class="project-thumb-bg" style="background:linear-gradient(135deg,#1a0a05,#0d0510);">
        ${icon}
      </div>
      ${thumb.querySelector('.project-overlay')?.outerHTML || ''}
    `;
  });
});

// ── SMOOTH SCROLL NAV LINKS ─────────────────────
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── NAV BACKGROUND ON SCROLL ───────────────────
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(5,5,5,0.97)';
    nav.style.borderBottomColor = 'rgba(201,146,42,0.3)';
  } else {
    nav.style.background = '';
    nav.style.borderBottomColor = '';
  }
});

// ── SKILL BAR WIDTH FIX ────────────────────────
// S'assure que les barres utilisent bien `width` (et pas seulement scaleX)
document.querySelectorAll('.skill-bar').forEach(bar => {
  const pct = parseFloat(bar.dataset.pct || 0);
  bar.style.setProperty('--target-width', (pct * 100) + '%');
});