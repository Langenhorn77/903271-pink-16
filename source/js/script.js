var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var headerBg = document.querySelector('.page-header');
var pageName = document.querySelector('.page-name');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    headerBg.classList.add('page-header--menu-closed');
    pageName.classList.add('page-name--menu-closed');
  } else {
    navMain.classList.add('main-nav--opened');
    navMain.classList.remove('main-nav--closed');
    headerBg.classList.remove('page-header--menu-closed');
    pageName.classList.remove('page-name--menu-closed');
  }
});
