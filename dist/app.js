const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const htmlBody = document.querySelector('#page-html');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  htmlBody.classList.toggle('active');
});
