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
            subtitle:"Your Story, Perfectly Told",
            title:'Stand Out. Get Noticed. Stay Remembered.',
            content:'We leverage data-driven insights and advanced AI tools to craft unique brand narratives, ensuring maximum visibility and credibility across digital and traditional media.  ',
            img:'/assets/img/hero/hero-image-2.png',    
            btnname:'CONTACT US',             
            btnurl:'/contact',             
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
                <div className="col-lg-6">
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
                <div className="col-lg-5">
                    <div className="hero-image">
                        <img src={heroContent.img} alt="img" className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s" />
                        <div className="bg-shape">
                            <img src="/assets/img/hero/bg-shape-2.png" alt="img" />
                        </div>
                        <div className="box-shape">
                            <img src="/assets/img/hero/box-shape.png" alt="img" />
                        </div>
                        <div className="gap-shape">
                            <img src="/assets/img/hero/gap-box.png" alt="img" />
                        </div>
                        <div className="cursor-shape">
                            <img src="/assets/img/hero/cursor.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
    );
};

export default HeroBanner2;