/////////////////////////////////////////////////
// 215-Lifecycle DOM Events
// Requires Bankist-DOM index.html and style.css files


// DOMContentLoaded: HTML is parsed (script.js is called at the end) and Js loaded

// Does not wait for images and external resources to load: just HTML and Js
document.addEventListener('DOMContentLoaded', function (e) {
  console.log(
    'HTML parsed and DOM tree built. DOMContentLoaded:',
    e.timeStamp,
    e
  );
});

// Load event: fired by the window as soon as images and external sources like CSS are loaded

window.addEventListener('load', function (e) {
  console.log('Images and CSS loaded. Page fully loaded:', e.timeStamp, e);
});

// Before unload event: fired after x-ing out but before leaving

// window.addEventListener('beforeunload', function (e) {
  //   e.preventDefault(); // some browsers require it (not Chrome)
  //   console.log(e);
  //   e.returnValue = ''; // for historical reasons
  // });
  
