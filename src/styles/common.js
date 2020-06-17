const toggle = document.querySelector('[data-element="nav-toggle"]');
const targetSelector = toggle.getAttribute('data-target');
const target = document.querySelector(targetSelector);

toggle.addEventListener('click', () => target.classList.toggle('open'));

