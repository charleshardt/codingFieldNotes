/////////////////////////////////////////////////
// 204-Event-Delegation
// Requires Bankist-DOM index.html and style.css files

// A functional but inefficient solution:
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine which element originated that event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy: to ignore clicks not on the links
  if (e.target.classList.contains('nav__link')) {
    console.log(this);
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Common use case of event delegation: adding event handlers to buttons that do not exist at runtime but are created dynamically during page load.
