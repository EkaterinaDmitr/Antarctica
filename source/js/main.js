'use strict';

(function () {
  const headerMain = document.querySelector('.header-nav');
  const button = document.querySelector('.header-nav button');
  const body = document.querySelector('body');

  headerMain.classList.remove('header-nav--nojs');

  button.addEventListener('click', function () {
    if (headerMain.classList.contains('header-nav--closed')) {
      headerMain.classList.remove('header-nav--closed');
      headerMain.classList.add('header-nav--opened');
      body.classList.add('hidden');
    } else {
      headerMain.classList.add('header-nav--closed');
      headerMain.classList.remove('header-nav--opened');
      body.classList.remove('hidden');
    }
  });

  window.vendor.svg4everybody();
})();
