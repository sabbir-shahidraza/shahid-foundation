const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();

  const f = new FormData(e.target);
  const phone = f.get('phone');
  const name = f.get('name');
  const msg = f.get('message');

  const text = `Hello Shahid Foundation, my name is ${name}. My phone number is ${phone}. ${msg}`;

  window.location.href =
    `https://wa.me/916263311415?text=${encodeURIComponent(text)}`;
});
