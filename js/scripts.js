// Original source code: w3schools.com

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get elements by IDs
var fixedHeader = document.getElementById('fixed-header');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky && window.pageYOffset > 220) {
    fixedHeader.classList.remove('d-none');
  } else {
    fixedHeader.classList.add('d-none');
  }
}
