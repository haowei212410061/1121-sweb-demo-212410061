const navbar = document.querySelector('#nav');
const date = document.querySelector('#date');

const navBtn = document.querySelector('.nav-btn');
const sidebar = document.querySelector('#sidebar');
const closeBtn = document.querySelector('#close-btn');

navBtn.addEventListener('click', function () {
   sidebar.classList.add('show-sidebar');
   navbar.classList.remove('navbar-fixed');
});

closeBtn.addEventListener('click', function() {
  sidebar.classList.remove('show-sidebar');
  if (window.scrollY > 80) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});

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
