document.addEventListener('DOMContentLoaded', function () {
  const slideshow = $('.slideshow');

  slideshow.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    arrows: false,
    pauseOnHover: false,
    cssEase: 'linear',
  });
});
