import { useRef } from "react";
import Slider from "react-slick";

const Testimonial1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  

      const sliderRef = useRef(null);

      const next = () => {
        sliderRef.current.slickNext();
      };
    
      const previous = () => {
        sliderRef.current.slickPrev();
      }; 

    const testimonialContent = [
        {img:'/assets/img/testimonial/4.png',title:'Rahul Sharma', content:'Exceptional digital marketing services! Boosted our brand visibility and engagement significantly.'},

        {img:'/assets/img/testimonial/2.png', title:'Priya Verma', content:'Highly professional team! Helped us achieve great results with targeted digital strategies.'},

        {img:'/assets/img/testimonial/5.png', title:'Arjun Mehta', content:'Outstanding SEO and social media marketing! Increased our leads and online presence.'},

        {img:'/assets/img/testimonial/1.png', title:' Sneha Patel', content:'Impressive digital marketing! Our website traffic and conversions increased remarkably.'},

        {img:'/assets/img/testimonial/7.png', title:'Vikram Singh', content:'Great SEO and PPC services! Helped our business grow with effective strategies.'},

        {img:'/assets/img/testimonial/3.png', title:'Aditi Nair', content:'Expert team with innovative ideas! Social media reach improved beyond expectations.'},

        {img:'/assets/img/testimonial/6.png', title:'rohit sharma', content:'A skilled team with creative concepts! Our social media engagement has exceeded all expectations..'},
      ]; 

    return (
        <section className="testimonial-section  py-5 ">
            <div className="container">
                <div className="testimonial-wrapper">
                    <div className="section-title-area">
                        <div className="section-title">
                            <div className="sub-title bg-color-2 wow fadeInUp">
                                <span>TESTIMONILAS</span>
                            </div>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                What our awesome <br/> clients say
                            </h2>
                        </div>
                        <p className="wow fadeInUp" data-wow-delay=".5s">
                            CMT AI delivers innovative, efficient,<br/> and intelligent AI solutions, enhancing <br />business growth seamlessly. 
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-xl-2 col-lg-4">
                            <div className="testimonial-left wow fadeInUp" data-wow-delay=".3s">
                                <div className="client-img">
                                    <img src="/assets/img/logo/logo-dark.png" alt="img" style={{height:"20px"}} />
                                    <div className="content">
                                        <div className="star">
                                        <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>1k+(reviews)</p>
                                    </div>
                                </div>
                                <div className="array-button wow fadeInUp" data-wow-delay=".5s">
                                    <button onClick={previous} className="array-prev"><i className="bi bi-arrow-left"></i></button>
                                    <button onClick={next} className="array-next"><i className="bi bi-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-8">
                            <div className="swiper testimonial-slider">
                                <div className="swiper-wrapper cs_slider_gap_30">
                                <Slider ref={sliderRef} {...settings}>
                                {testimonialContent.map((item, i) => (
                                    <div key={i} className="swiper-slide">
                                        <div className="testimonial-box-items">
                                            <div className="icon">
                                                <img src="/assets/img/testimonial/icon.png" alt="img" />
                                            </div>
                                            <div className="testimonial-img">
                                                <img src={item.img} alt="img" />
                                                <div className="shape-img">
                                                    <img src="/assets/img/testimonial/shape.png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="content">
                                               <div className="client-info">
                                                    <div className="star">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                               </div>
                                               <p>
                                               {item.content}
                                               </p>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                    </Slider>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial1;