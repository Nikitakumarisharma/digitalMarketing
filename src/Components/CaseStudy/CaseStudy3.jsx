import { Link } from "react-router-dom";
import Slider from "react-slick";

const CaseStudy3 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
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
              slidesToShow: 1,
            }
          }
        ]
      };  


      const chooseContent = [
        {title: 'Personal Branding', description: 'Build a strong, authentic identity for lasting industry influence.' },
        {title: 'Media Relations & Publicity', description: 'Secure media coverage to boost  brand awareness and credibility.' },
        {title: 'Crisis Communication', description: 'Manage reputation effectively with strategic crisis response and communication.' },
        {title: 'Reputation Management', description: 'Strengthen brand trust through proactive online and offline strategies.' },
        {title: 'Social Media & Digital PR', description: 'Leverage digital platforms for impactful brand visibility and engagement.' },
        {title: 'Corporate PR', description: 'Shape public perception and credibility for corporate success.' },
        {title: 'Celebrity & Influencer PR', description: 'Amplify brand reach through influential personalities and collaborations.' },
        {title: 'Political PR', description: 'Craft persuasive messaging and strategies for political reputation management.' },
        {title: 'Event PR & Promotions', description: 'Create buzz and media attention for successful event exposure.' },
        {title: 'Content PR', description: 'Develop compelling narratives to engage and influence target audiences.' },
        {title: 'AI-Powered PR Solutions', description: 'Utilize AI-driven insights for smarter, data-backed PR strategies.' }
      ];
      

    return (
        <section className="case-studies-section-3 fix pt-5 ">
        <div className="container">
            <div className="section-title text-center">
                <div className="sub-title wow fadeInUp">
                    <span>PR Services</span>
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Elevate Your Brand with Expert<br/>
                PR Solutions
                </h2>
            </div>
        </div>
        <div className="container-fluid">
            <div className="swiper project-slider">
                <div className="swiper-wrapper cs_slider_gap_30">
                <Slider {...settings}>
                {chooseContent.map((item, i) => (
                    <div key={i} className="swiper-slide">
                        <div className="case-studies-card-items">
                            
                            <div className="content">
                                <div className="title">
                                    <h3><Link to="/project/project-details">{item.title}</Link></h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    </Slider>
                    
                </div>
                <div className="main-button wow fadeInUp" 
     data-wow-delay=".3s" 
     style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", height: "30vh" }}>
  
  <Link to="/blog">
    <span className="theme-btn">Explore More </span>
  </Link>

</div>

            </div>
        </div>
    </section>
    );
};

export default CaseStudy3;