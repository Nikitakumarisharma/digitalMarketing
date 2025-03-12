import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const textItems = [
  "Political PR",
  "AI-Powered PR Solutions",
  "Content PR",
  "Event PR & Promotions",
  "Political PR",
  "Celebrity & Influencer PR",
  "Personal Branding",
  "Media Relations & Publicity",
  "Crisis Communication",
  "Reputation Management",
  "Social Media & Digital PR",
  "Corporate PR",
  "Celebrity & Influencer PR",
  
];

const sliderSettings = {
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 400,
  arrows: false,
  dots: false,
  pauseOnHover: true,
  infinite: true,
  centerMode: false,
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
    <section className="container text-center pt-5 mx-auto">
      <div className="section-title text-center">
                <div className="sub-title wow fadeInUp">
                    <span>PR Services</span>
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Elevate Your Brand with Expert<br/>
                PR Solutions
                </h2>
            </div>
      <hr />
      <Slider {...sliderSettings} className="customer-logos slider">
        {textItems.map((text, index) => (
          <div key={index} className="slide py-4">
            <div 
              className="text-slide mx-auto flex items-center justify-center "
              style={{
                height: "100px",
                width: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // background: "#f3f3f3",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#6A47ED",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
              }}
            >
              {text}
            </div>
          </div>
        ))}
      </Slider>
      <hr />
    </section>
  );
};

export default Client;
