import { useEffect } from "react";
import Slider from "react-slick";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";

const About1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      };  

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    const brandContent = [
        {img:'/assets/img/brand/01.png'},
        {img:'/assets/img/brand/02.png'},
        {img:'/assets/img/brand/03.png'},
        {img:'/assets/img/brand/04.png'},
      ];

      const aboutContent = {
        bg:'/assets/img/about/about-bg.png',  
        img:'/assets/img/about/01.png',  
        subtitle:"ABOUT CMT AI",
        title:'Engage. Influence. Convert.',
        content:"At CMT AI, we empower businesses with cutting-edge digital marketing and public relations strategies. Our AI-driven solutions help you build a powerful online presence, engage with your audience, and drive measurable results. Whether you're looking to boost your brand visibility, enhance customer engagement, or establish a strong digital footprint, we have the expertise to make it happen.",  
        
      }      


    return (
        <section className="about-section  " data-background={aboutContent.bg} >
        <div className="left-shape float-bob-y ">
            <img src="/assets/img/about/left-shape.png" alt="img" />
        </div>
        <div className="container ">
            <div className="about-wrapper ">
                <div className="row g-4 py-5">
                    <div className="col-lg-6">
                        <div className="about-image">
                            <img src={aboutContent.img} alt="img" className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s" />
                            <div className="bg-shape">
                                <img src="/assets/img/about/bg-shape.png" alt="img" />
                            </div>
                            <div className="grap-shape float-bob-x">
                                <img src="/assets/img/about/grap.png" alt="img" />
                            </div>
                            <div className="box-shape float-bob-y">
                                <img src="/assets/img/about/box-shape.png" alt="img" />
                            </div>
                            <div className="emoji-shape">
                                <img src="/assets/img/about/emoji.png" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title">
                                <div className="sub-title bg-color-2 wow fadeInUp">
                                    <span>{aboutContent.subtitle}</span>
                                </div>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                {aboutContent.title}
                                </h2>
                            </div>
                            <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                            {aboutContent.content}
                            </p>
                            
                            <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                                <Link to="/contact"> <span className="theme-btn mt-5"> EXPLORE MORE </span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About1;