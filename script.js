/* Navigation mobile toggle */
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !expanded);
  nav.setAttribute('aria-expanded', !expanded);
});

/* Simple apparition au scroll */
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('in');
  });
}, { threshold: .3 });

cards.forEach(c => observer.observe(c));