document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const closeMenu = document.querySelector('.close-menu');
  const navUl = document.querySelector('nav ul');
  const navLinks = document.querySelectorAll('nav ul li a');

  menuToggle.addEventListener('click', function() {
      navUl.classList.toggle('active');
      closeMenu.classList.toggle('active');
  });

  closeMenu.addEventListener('click', function() {
      navUl.classList.remove('active');
  });

  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          navUl.classList.remove('active');
      });
  });
});
