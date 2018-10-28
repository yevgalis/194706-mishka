// MOBILE SITE NAVIGATION
var siteNav = document.querySelector('.main-nav');
var toggleBtn = document.querySelector('.main-nav__toggle');

siteNav.classList.remove('main-nav--nojs');

toggleBtn.addEventListener('click', function() {
  if (siteNav.classList.contains('main-nav--closed')) {
    siteNav.classList.remove('main-nav--closed');
    siteNav.classList.add('main-nav--opened');
  } else {
    siteNav.classList.add('main-nav--closed');
    siteNav.classList.remove('main-nav--opened');
  }
});

// MODAL WINDOW SHOW/CLOSE
var showModalBtn = document.querySelectorAll('.js-show-modal');
var overlay = document.querySelector('.overlay');
var modal = document.querySelector('.modal');

function toggleModal(event) {
  event.preventDefault();
  if (modal.classList.contains('modal--add-cart')) {
    modal.classList.remove('modal--add-cart');
  } else {
    modal.classList.add('modal--add-cart');
  }

  if (overlay.classList.contains('overlay--show')) {
    overlay.classList.remove('overlay--show');
  } else {
    overlay.classList.add('overlay--show');
  }
}

for (var i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener("click", toggleModal);
}

overlay.addEventListener("click", toggleModal);
