const navbar = document.querySelector('#nav');
const date = document.querySelector('#date');
// add fixed class to navbar
window.addEventListener('scroll', function () {
  if (window.scrollY > 80) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});

// set year
date.innerHTML = new Date().getFullYear();
