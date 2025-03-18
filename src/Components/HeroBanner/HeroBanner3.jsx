import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const HeroBanner2 = () => {

        useEffect(() => {
            loadBackgroudImages();
          }, []);



          const heroContent = {
            bg:'/assets/img/hero/hero-bg-2.png',  
            subtitle:"Latest Insights",
            title:'Latest Trends and Expert Insights',
            content:'Stay updated with insightful articles, expert opinions, and trending topics. Explore inspiring stories, industry insights, and practical tips to enhance your knowledge and stay ahead in your field.Let me know if you need any modifications! 🚀 ',
            img:'/assets/img/hero/hero-image-2.png',    
            btnname:'Get Quotation',             
            btnurl:'/Quotation',             
          }

    return (
        <section className="hero-section hero-2" data-background={heroContent.bg}>
        <div className="trophy-shape">
            <img src="/assets/img/hero/trophy-shape.png" alt="img" />
        </div>
        <div className="left-shape">
            <img src="/assets/img/hero/left-shape.png" alt="img" />
        </div>
        <div className="right-shape">
            <img src="/assets/img/hero/right-shape.png" alt="img" />
        </div>
        <div className="rocket-shape float-bob-y">
            <img src="/assets/img/hero/rocket-2.png" alt="img" />
        </div>
        <div className="container-fluid">
            <div className="row g-4 justify-content-between align-items-center">
                <div className="col-lg-9">
                    <div className="hero-content">
                        <h6 className="wow fadeInUp">{heroContent.subtitle}</h6>
                        <h1 className="wow fadeInUp" data-wow-delay=".3s">
                        {heroContent.title}
                        </h1>
                        <p className="wow fadeInUp" data-wow-delay=".5s">
                        {heroContent.content}
                        </p>
                        <div className="hero-button">
                            <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                                <Link to={heroContent.btnurl}> <span className="theme-btn">{heroContent.btnname} </span></Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-1">
                    
                </div>
            </div>
        </div>
       
    </section>
    );
};

export default HeroBanner2;