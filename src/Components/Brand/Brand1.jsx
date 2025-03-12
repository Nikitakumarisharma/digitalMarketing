import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosPeople } from "react-icons/io";
import Slider from "react-slick";

const images = [
  "assets/img/clients/1.png",
  "assets/img/clients/2.png",
  "assets/img/clients/3.png",
  "assets/img/clients/4.png",
  "assets/img/clients/5.png",
  "assets/img/clients/6.png",
  "assets/img/clients/7.png",
  "assets/img/clients/8.png",
  "assets/img/clients/9.png",
  "assets/img/clients/10.png",
  "assets/img/clients/11.png",
  "assets/img/clients/12.png",
  "assets/img/clients/13.png",
  "assets/img/clients/14.png",
  "assets/img/clients/15.png",
  "assets/img/clients/16.png",
  "assets/img/clients/17.png",
  "assets/img/clients/18.png",
  "assets/img/clients/19.png",
  "assets/img/clients/20.png",
  "assets/img/clients/21.png",
  "assets/img/clients/22.png",
  "assets/img/clients/23.png",
  "assets/img/clients/24.png",
  
];

const sliderSettings = {
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 150,
  arrows: false,
  dots: false,
  pauseOnHover: true,
  infinite: true, // Ensures continuous loop
  centerMode: false, // Prevents extra spacing on the right
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const Client = () => {
  return (
    <section className="container text-center  py-5  mb-5 mx-auto">
      <h4 className="brand-title m-3">1k + Brands Trust Us</h4>
      <hr />
    <Slider {...sliderSettings} className="customer-logos slider">
      {images.map((src, index) => (
        <div key={index} className="slide">
          <img src={src} alt={`Logo ${index}`} className="mx-autow-28 gap- " style={{height:"100px", width:"150px"}} />
        </div>
      
      ))}
    </Slider>
    <hr />

  </section>
  )
}

export default Client