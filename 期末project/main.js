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
});

//點擊子導覽列 以iframe形式呈現在網頁上
function showdemo(page) {
  const PageContainer = document.getElementById('page-container');
}
