const burger = document.querySelector('.header__nav-burger');
const navWrapper = document.querySelector('.header__nav-wrapper');

burger.addEventListener('click', () => {
  navWrapper.classList.toggle('active');
  burger.classList.toggle('open');
});