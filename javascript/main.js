const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show')
});

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    nav.classList.remove('show')
  })
})