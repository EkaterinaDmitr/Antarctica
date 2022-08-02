'use strict';

const pageHeaderNav = document.querySelector('nav');
const pageHeaderToggle = document.querySelector('.page-header__toggle');

pageHeaderNav.classList.remove('page-header__navigation--nojs');

const closeMenu = function () {
  pageHeaderNav.classList.add('page-header__navigation--closed');
  pageHeaderNav.classList.remove('page-header__navigation--opened');
  document.removeEventListener('keydown', onMenuEscPress);
  document.removeEventListener('keydown', onElementClickOutside);

};

const openMenu = function () {
  pageHeaderNav.classList.remove('page-header__navigation--closed');
  pageHeaderNav.classList.add('page-header__navigation--opened');
  document.addEventListener('keydown', onMenuEscPress);
  document.addEventListener('keydown', onElementClickOutside);

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

const onMenuEscPress = function (evt) {
  if (evt.key === 'Escape') {
    closeMenu();
  }
};

const onElementClickOutside = document.querySelector('nav');
document.addEventListener('mousedown', function (e) {
  if (e.target.closest('nav') === null) {
    closeMenu();
  }
});
