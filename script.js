/* Cursor glow */
const glow = document.getElementById('cursorGlow');
if (glow && window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

/* Nav scroll */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* Mobile nav */
const toggle = document.getElementById('navToggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* 3D tilt on photo card */
const stage = document.getElementById('photoStage');
const card = document.getElementById('photoCard');
if (stage && card && window.matchMedia('(pointer: fine)').matches) {
  stage.addEventListener('mousemove', (e) => {
    const rect = stage.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotY = (x - 0.5) * 18;
    const rotX = (0.5 - y) * 14;
    card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  });
  stage.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

/* Metric counters */
function animateValue(el, target, duration = 1800) {
  const startTime = performance.now();
  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(target * eased);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

const metricObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.metric-value').forEach((el) => {
          const target = parseInt(el.dataset.target, 10);
          if (!el.dataset.animated) {
            el.dataset.animated = '1';
            animateValue(el, target);
          }
        });
        metricObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.35 }
);

const metricsSection = document.querySelector('.hero-metrics');
if (metricsSection) metricObserver.observe(metricsSection);

/* Reveal on scroll */
const revealEls = document.querySelectorAll(
  '.section-header, .project-card, .agent-card, .zone-card, .impact-card, .timeline-item, .product-card, .cert-card, .writing-card, .connect-card, .info-card, .terminal, .metric'
);
revealEls.forEach((el) => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
);
revealEls.forEach((el) => revealObserver.observe(el));

/* Active nav link */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach((link) => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--accent)';
    }
  });
});
