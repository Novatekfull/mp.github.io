import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export const HeaderHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const boxWidth = 600; // Largeur de la boîte de texte en pixels
  const boxHeight = 300; // Hauteur de la boîte de texte en pixels
  return (
    <section className="relative  ">
      <Slider {...settings} className="h-[95vh]">
        <div>
          <img
            src="assets/carrousels/image1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
            style={{ width: boxWidth, height: boxHeight }}
          />
        </div>
        <div>
          <img
            src="assets/carrousels/image2.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="assets/carrousels/image3.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center z-10">
        Bienvenue sur le site de Gregory Maillard, expert en paysagisme.
      </div>
    </section>
  );
};
