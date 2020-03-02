// Original source code: w3schools.com

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get elements by IDs
var header = document.getElementById('header');
var navbar = document.getElementById('navbar');
var timer = document.getElementById('timer');
var logo = document.getElementById('image-logo');
var nabbuttons = document.getElementById('nabbuttons');
var switchbutton = document.getElementById('switchbutton');
var hideOnSmall = document.getElementsByClassName('hideOnSmall');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky && window.pageYOffset > 220) {
    header.classList.add('sticky');
    navbar.classList.add('d-none');
    timer.classList.add('d-none');
    switchbutton.classList.remove('d-none');
    logo.classList.add('logo-on-small');
    nabbuttons.classList.remove('col-lg-3');
    nabbuttons.classList.add('col-lg-6');
  } else {
    header.classList.remove('sticky');
    navbar.classList.remove('d-none');
    timer.classList.remove('d-none');
    switchbutton.classList.add('d-none');
    logo.classList.remove('logo-on-small');
    nabbuttons.classList.add('col-lg-3');
    nabbuttons.classList.remove('col-lg-6');
  }
  // if (window.innerWidth <= 767) {
  //   hideOnSmall.style.display = 'none';
  // }
  // if (window.innerWidth >= 767 && window.innerWidth <= 991) {
  //   hideOnSmall.style.display = 'none';
  // }
  // if (window.innerWidth >= 991) {
  //   hideOnSmall.style.display = 'none';
  // }
}
