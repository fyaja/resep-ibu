const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');
const main = document.querySelector('main');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show')
  main.classList.toggle('margin-top')
});

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    nav.classList.remove('show')
    main.classList.remove('margin-top')
  })
})