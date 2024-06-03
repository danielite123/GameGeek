// carousel.js

export function setupCarousel() {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel-button.next');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nav = document.querySelector('.carousel-nav');
  const indicators = Array.from(nav.children);

  const slideWidth = slides[0].getBoundingClientRect().width;

  const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px';
  };
  slides.forEach(setSlidePosition);

  const moveToSlide = (track, currentSlide, targetSlide) => {
      track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
      currentSlide.classList.remove('current-slide');
      targetSlide.classList.add('current-slide');
  };

  const updateIndicators = (currentIndicator, targetIndicator) => {
      currentIndicator.classList.remove('current-slide');
      targetIndicator.classList.add('current-slide');
  };

  prevButton.addEventListener('click', e => {
      const currentSlide = track.querySelector('.current-slide');
      const prevSlide = currentSlide.previousElementSibling;
      const currentIndicator = nav.querySelector('.current-slide');
      const prevIndicator = currentIndicator.previousElementSibling;

      if (prevSlide) {
          moveToSlide(track, currentSlide, prevSlide);
          updateIndicators(currentIndicator, prevIndicator);
      }
  });

  nextButton.addEventListener('click', e => {
      const currentSlide = track.querySelector('.current-slide');
      const nextSlide = currentSlide.nextElementSibling;
      const currentIndicator = nav.querySelector('.current-slide');
      const nextIndicator = currentIndicator.nextElementSibling;

      if (nextSlide) {
          moveToSlide(track, currentSlide, nextSlide);
          updateIndicators(currentIndicator, nextIndicator);
      }
  });

  nav.addEventListener('click', e => {
      const targetIndicator = e.target.closest('button');

      if (!targetIndicator) return;

      const currentSlide = track.querySelector('.current-slide');
      const currentIndicator = nav.querySelector('.current-slide');
      const targetIndex = indicators.findIndex(indicator => indicator === targetIndicator);
      const targetSlide = slides[targetIndex];

      moveToSlide(track, currentSlide, targetSlide);
      updateIndicators(currentIndicator, targetIndicator);
  });
}
