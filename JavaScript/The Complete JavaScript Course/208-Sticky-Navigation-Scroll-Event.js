/////////////////////////////////////////////////
// 208-Sticky-Navigation-Scroll-Event
// Requires Bankist-DOM index.html and style.css files

// Sticky navigation
const initialCoords = nav.getBoundingClientRect();
window.addEventListener('scroll', function () {
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
