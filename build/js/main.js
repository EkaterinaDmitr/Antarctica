'use strict';

const pageHeaderNav = document.querySelector('nav');
const pageHeaderToggle = document.querySelector('.page-header__toggle');

pageHeaderNav.classList.remove('page-header__navigation--nojs');

const closeMenu = function () {
  pageHeaderNav.classList.add('page-header__navigation--closed');
  pageHeaderNav.classList.remove('page-header__navigation--opened');
  document.body.classList.remove('page-header__fix');
};

const openMenu = function () {
  pageHeaderNav.classList.remove('page-header__navigation--closed');
  pageHeaderNav.classList.add('page-header__navigation--opened');
  document.body.classList.add('page-header__fix');
};

const toggleClickHandler = function () {
  if (pageHeaderNav !== null && pageHeaderNav.childNodes.length > 0) {
    if (pageHeaderNav.classList.contains('page-header__navigation--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  }
};

if (pageHeaderToggle !== null) {
  pageHeaderToggle.addEventListener('click', toggleClickHandler);
}

const menuItems = pageHeaderNav.querySelectorAll('.page-header__link');

menuItems.forEach(function (item) {
  item.addEventListener('click', function () {
    closeMenu();
  });
});
