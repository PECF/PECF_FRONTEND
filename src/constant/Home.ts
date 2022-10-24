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

  slidesToShow: 5,
  centerMode: true,
  centerPadding: "10px",
  slidesToScroll: 1,

  initialSlide: 3,

  responsive: [
    {
      breakpoint: 1400,
      settings: {
        centerMode: true,
        centerPadding: "10px",
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        centerMode: true,
        centerPadding: "10px",
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 850,
      settings: {
        dots: false,
        centerMode: true,
        centerPadding: "10px",
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
