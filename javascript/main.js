// navbar
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

// carousel
const cardWrapper = document.querySelector('.wrapper');
const cardItems = document.querySelectorAll('.card');
const cardLength = cardItems.length;
const width = window.innerWidth;

const perView = width <= 1024 ? 1 : 2;
let totalScroll = 0;

for (let i = 0; i < perView; i++) {
  const card = cardItems[i].cloneNode(true);
  cardWrapper.appendChild(card);
}

function scroll(direction) {
  const widthEl = document.querySelector('.wrapper > :first-child').offsetWidth + 24;

  if (direction === 'next') {
    totalScroll++;
      if (totalScroll > cardLength) {
      cardWrapper.style.transition = 'none';
      cardWrapper.style.left = '0px';
      totalScroll = 1;
      setTimeout(() => {
        cardWrapper.style.transition = '.3s';
        cardWrapper.style.left = `-${totalScroll * widthEl}px`;
      }, 0);
      return;
    }
  } else {
    totalScroll--;
    if (totalScroll < 0) {
      cardWrapper.style.transition = 'none';
      cardWrapper.style.left = `-${cardLength * widthEl}px`;
      totalScroll = cardLength - 1;
      setTimeout(() => {
        cardWrapper.style.transition = '.3s';
        cardWrapper.style.left = `-${totalScroll * widthEl}px`;
      }, 0);
      return;
    }
  }

  cardWrapper.style.transition = '.3s';
  cardWrapper.style.left = `-${totalScroll * widthEl}px`;
}

document.querySelector('.next').addEventListener('click', () => scroll('next'));
document.querySelector('.previous').addEventListener('click', () => scroll('previous'));