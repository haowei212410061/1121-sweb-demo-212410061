//實現導覽列切換功能
const navbars = document.querySelectorAll('.classdemo');
const demos = document.querySelectorAll('.demo');
navbars.forEach(function (navbar) {
  navbar.addEventListener('click', function () {
    demos.forEach(function (demo) {
      demo.classList.toggle('demo');
    });
  });
});




const toggler = document.getElementById('theme-toggle');
toggler.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
})



//切換每個子導覽列
function loadpage(pageUrl) {
  document.getElementById('pageiFrame').src = pageUrl;
}

const linkDemos = document.querySelectorAll('.link-demo');
const resumes = document.querySelectorAll('.resumes');
const containers = document.querySelectorAll('.content');
// const MainNav = document.querySelectorAll('.main')
const resume = document.querySelectorAll('.resume');

linkDemos.forEach(function (linkDemo) {
  linkDemo.addEventListener('click', function () {
    resumes.forEach(function (resumes) {
      resumes.style.display = 'none';
    });

    containers.forEach(function (container) {
      container.style.display = 'none';
    });
  });
});
const aboutMeSections = document.querySelectorAll('.about');

aboutMeSections.forEach(function (aboutMeSection) {
  aboutMeSection.addEventListener('click', function () {
    resumes.forEach(function (resumes) {
      resumes.style.display = 'none';
    });
    containers.forEach(function (container) {
      container.style.display = 'none';
    });
  });
});



const toggleBtn = document.querySelectorAll('.fa-solid.fa-solid');
const main = document.querySelector('.main');

toggleBtn.addEventListener('click', function () {
  main.classList.toggle('close');
});