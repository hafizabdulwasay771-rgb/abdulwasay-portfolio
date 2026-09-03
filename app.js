const nav = document.querySelector('.site-header');
const menu = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const progress = document.querySelector('.scroll-progress span');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const updateScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 12);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
};
window.addEventListener('scroll', updateScroll, { passive: true });
updateScroll();

if (menu && navLinks) {
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!open));
    navLinks.classList.toggle('open', !open);
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
  }));
  document.addEventListener('click', e => {
    if (!nav.contains(e.target)) { menu.setAttribute('aria-expanded', 'false'); navLinks.classList.remove('open'); }
  });
}

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const tilt = document.querySelector('[data-tilt]');
if (tilt && !reducedMotion && window.matchMedia('(pointer:fine)').matches) {
  const scene = tilt.querySelector('.scene');
  tilt.addEventListener('pointermove', e => {
    const rect = tilt.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - .5;
    const y = (e.clientY - rect.top) / rect.height - .5;
    scene.style.transform = `rotateX(${y * -5}deg) rotateY(${x * 6}deg)`;
  });
  tilt.addEventListener('pointerleave', () => { scene.style.transform = ''; });
}

document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', e => {
  const target = document.querySelector(link.getAttribute('href'));
  if (target) { e.preventDefault(); target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' }); }
}));

const form = document.getElementById('contact-form');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Automation project inquiry from ${data.get('name')}`);
  const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\nWhat I want to automate:\n${data.get('message')}`);
  window.location.href = `mailto:hafizabdulwasay771@gmail.com?subject=${subject}&body=${body}`;
});

document.getElementById('year').textContent = new Date().getFullYear();
