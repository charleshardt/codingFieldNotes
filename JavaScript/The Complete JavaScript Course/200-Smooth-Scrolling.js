/////////////////////////////////////////////////
// 200-Smooth-Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // Legacy method:
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  console.log('Current Scroll (X/Y): ', window.scrollX, window.scrollY);
  console.log(
    'height/width of viewport:',
    document.documentElement.clientHeight,
    '/',
    document.documentElement.clientWidth
  );
  
  // Scroll-to
  
  // Basically, you have to add the Current Top Position (distance from object to top of viewport) to the Current Y Scroll (top of viewport to top of page. Do the same for left scroll just for consistency--we aren't actually going to scroll left and right.)
  
  // window.scrollTo(
    //   s1coords.left + window.scrollX,
    //   s1coords.top + window.scrollY
  // );
  
  // To really grasp this, you have to spend a lot of time playing with it.

  // For smooth version, pass in as object with left, top, and behavior properties.

  // window.scrollTo({
    //   left: s1coords.left + window.scrollX,
    //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  // Modern way: call the scrollIntoView method with object with behavior property
  section1.scrollIntoView({ behavior: 'smooth' });
});
