// MOBILE SITE NAVIGATION
const siteNav = document.querySelector('.main-nav');
const toggleBtn = document.querySelector('.main-nav__toggle');

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
const showModalBtn = document.querySelectorAll('.js-show-modal');
const modal = document.querySelector('.modal');

function doShowModal() {
//  const modal = document.querySelector('.modal');
  if (modal.classList.contains('modal--add-cart')) {
    modal.classList.toggle('modal--add-cart');
  }
}

//function closeModal(event) {
//  if (event.keyCode === 27) {
//    modal.classList.add('modal--add-cart');
//  }
//}

for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener("click", doShowModal);
}

//modal.addEventListener("keypress", closeModal);
