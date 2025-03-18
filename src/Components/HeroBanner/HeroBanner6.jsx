import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";


const HeroBanner5 = () => {

        useEffect(() => {
            loadBackgroudImages();
          }, []);



          const heroContent = {
            bg:'/assets/img/hero/hero-bg-2.png',  
            subtitle:" Check Your Digital Marketing Service Quotation",
           
            content:'Struggling to grow online? Boost your brand with expert Social Media Marketing (SMM)! 📈 Get more engagement, visibility, and leads. 🔥 Start now! ✅',
            img:'/assets/img/hero/owner.png',    
            btnurl:'/about',             
          }

    return (
        <section className="hero-section hero-2 pb-5" data-background={heroContent.bg}>
        
        <div className="container-fluid">
            <div className="row g-4 justify-content-between align-items-center">
                <div className="col-lg-12">
                    <div className="hero-content">
                        <h6 className="wow fadeInUp">{heroContent.subtitle}</h6>
                        <p className="wow fadeInUp" data-wow-delay=".5s">
                        {heroContent.content}
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
       
    </section>
    );
};

export default HeroBanner5;