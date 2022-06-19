(function () {
  const openBtn = document.querySelector('.menu__hamburger');
  const closeBtn = document.querySelector('.menu__close');
  const menu = document.querySelector('.menu');

  openBtn.addEventListener('click', function() {
    menu.classList.add('menu--open');
  })
  closeBtn.addEventListener('click', function() {
    menu.classList.remove('menu--open');
  })
})();