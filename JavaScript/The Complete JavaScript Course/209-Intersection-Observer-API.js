/////////////////////////////////////////////////
// 209-Intersection-Observer-API
// Requires Bankist-DOM index.html and style.css files

// An intersection observer observes the intersection of elements on a page

// callback to pass into observer
const obsCallback = function (entries, observer) {
  // entries are array of thresholds, which can be many
  // observer can be useful, but now only interested in entries
  entries.forEach(entry => {
    // The callback fires when the elements are intersecting at the intersectionRatio. The isIntersecting property reports whether the two elements are currently intersecting.
    console.log(entry);
  });
};

// options to pass into observer
const obsOptions = {
  root: null, // The element that the target will intersect. Put <null> to see the target intersect the viewport itself.

  threshold: [0, 0.2], // The callback (obsCallback) fires when the target (section1) interects (scrolling up or down) the root element (viewport) at these thresholds (0%, 20%). 0 means it fires when the target moves out of the viewport completely. 1 means it fires when the target is 100% inside the viewport.
};

// pass in a callback and object of options
const observer = new IntersectionObserver(obsCallback, obsOptions);

// .observe() method on a target element
observer.observe(section1);

