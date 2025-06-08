/////////////////////////////////////////////////
// 213-214-Slider-Component-Part-1-and-2
// Requires Bankist-DOM index.html and style.css files

// Slider

const slider = function () {
  // Variables
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  let currSlide = 0;
  const maxSlide = slides.length;

  // Functions

  // Slider dots
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  // The active dot
  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  // Move to the slide
  const goToSlide = function (slideNo) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slideNo)}%)`)
    );
  };

  // Next and Prev
  const nextSlide = () => {
    currSlide === maxSlide - 1 ? (currSlide = 0) : currSlide++;
    goToSlide(currSlide);
    activateDot(currSlide);
  };

  const prevSlide = () => {
    currSlide === 0 ? (currSlide = maxSlide - 1) : currSlide--;
    goToSlide(currSlide);
    activateDot(currSlide);
  };

  // Initialization
  const init = function () {
    createDots();
    goToSlide(0);
    activateDot(currSlide);
  };

  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  document.addEventListener('keydown', e => {
    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      currSlide = Number(e.target.dataset.slide);
      goToSlide(currSlide);
      activateDot(currSlide);
    }
  });
};

slider();

