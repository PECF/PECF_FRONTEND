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
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  centerMode:true,
  slidesToShow: 5.9,
  
  
  slidesToScroll: 1,

  initialSlide: 3,

  responsive: [
    
    {
      breakpoint: 1360,
      settings: {
        
        
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 1030,
      settings: {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        centerMode: true,
        slidesToShow: 0.9,
        slidesToScroll: 1,
      },
    },
  
  ],
};
