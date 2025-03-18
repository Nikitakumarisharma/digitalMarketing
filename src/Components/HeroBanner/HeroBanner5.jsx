import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";


const HeroBanner5 = () => {

        useEffect(() => {
            loadBackgroudImages();
          }, []);



          const heroContent = {
            bg:'/assets/img/hero/hero-bg-2.png',  
            subtitle:"Dedicated Professionals",
            title:'Expert, Reliable, and Results-Driven Services',
            content:'We provide top-notch solutions tailored to your needs, ensuring quality, efficiency, and measurable success. Let us help you achieve your goals seamlessly',
            img:'/assets/img/hero/service.png',    
            btnurl:'/about',             
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
        <div className="container-fluid">
            <div className="row g-4 justify-content-between align-items-center">
                <div className="col-lg-7">
                    <div className="hero-content">
                        <h6 className="wow fadeInUp">{heroContent.subtitle}</h6>
                        <h1 className="wow fadeInUp" data-wow-delay=".3s">
                        {heroContent.title}
                        </h1>
                        <p className="wow fadeInUp" data-wow-delay=".5s">
                        {heroContent.content}
                        </p>
                        
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="hero-image">
                        <img src={heroContent.img} alt="img" className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s" />
                      
                    </div>
                </div>
            </div>
        </div>
       
    </section>
    );
};

export default HeroBanner5;