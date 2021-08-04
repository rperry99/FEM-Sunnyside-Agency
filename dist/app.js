// // Toggle Nav section on and off on mobile.
// const mobileNav = document.getElementById('nav-mobile-links');
// const hamburger = document.getElementById('hamburger');
// const htmlBody = document.getElementById('page-html');

// console.log(mobileNav.style);
// function toggleNav() {
//   if (mobileNav.style.display == '') {
//     mobileNav.style.display = 'flex';
//     htmlBody.classList.add('stop-scrolling');
//   } else {
//     htmlBody.classList.remove('stop-scrolling');
//     mobileNav.style.display = '';
//   }
// }

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const htmlBody = document.querySelector('#page-html');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  htmlBody.classList.toggle('active');
});
