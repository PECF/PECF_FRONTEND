export const FirstSlider = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export const SecondSlider = {
  dots: true,
  infinite: true,
  speed: 300,

  slidesToShow: 4,
  centerMode: true,
  centerPadding: "10px",
  slidesToScroll: 1,

  initialSlide: 3,

  responsive: [
    {
      breakpoint: 1300,
      settings: {
        centerMode: true,
        centerPadding: "10px",
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 990,
      settings: {
        centerMode: true,
        centerPadding: "10px",
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 670,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
