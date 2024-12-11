let currentIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelector('.carousel-images');
  const totalSlides = slides.children.length;

  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}