import { Link } from "react-router-dom";

const About2 = ({addclass}) => {

    const aboutContent = {  
        img:'/assets/img/about/01.jpg',  
        subtitle:"About Company",
        title:'Powering Personal Brands with Intelligent PR',
        content:"In today’s digital age, your personal brand defines your reputation, authority, and impact. CMT AI merges AI-driven insights with expert strategy to shape your image, amplify your voice, and establish you as an industry leader. ",  
        icon1:'bi bi-people', 
        title2:'Media Relations & Publicity', 
        content2:'Boost your visibility with strategic media relations and publicity', 
        icon2:'bi bi-pie-chart', 
        title3:'Personal Branding & digital PR', 
        content3:' Build a powerful personal brand with strategic digital PR.', 
      }  

    return (
        <section className={addclass}>
            <div className="bg-shape">
                <img src="/assets/img/about/bg-shape-2.png" alt="img" />
            </div>
            <div className="right-shape float-bob-x">
                <img src="/assets/img/case-studies/right-shaape.png" alt="img" />
            </div>
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row ">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src={aboutContent.img} alt="img" className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s" />
                                <div className="box-shape float-bob-y">
                                    <img src="/assets/img/about/box-shape-2.png" alt="img" />
                                </div>
                                <div className="gap-shape float-bob-x">
                                    <img src="/assets/img/about/grap-2.png" alt="img" />
                                </div>
                                <Link to="/about" className="circle-button">
                                <i className="bi bi-arrow-up-right"></i>
                                    <span className="text-circle">
                                        <img src="/assets/img/about/white-text.png" alt="img" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <div className="sub-title bg-color-2 wow fadeInUp">
                                        <span>{aboutContent.subtitle}</span>
                                    </div>
                                    <h3 className="wow fadeInUp" data-wow-delay=".3s">
                                    {aboutContent.title}
                                    </h3>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                {aboutContent.content}
                                </p>
                                <div className="icon-items-area">
                                    <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                                        <div className="icon">
                                            <i className={aboutContent.icon1}></i>
                                        </div>
                                        <div className="content">
                                            <h3>{aboutContent.title2}</h3>
                                            <p>{aboutContent.content2}</p>
                                        </div>
                                    </div>
                                    <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                                        <div className="icon">
                                            <i className={aboutContent.icon2}></i>
                                        </div>
                                        <div className="content">
                                            <h3>{aboutContent.title3}</h3>
                                            <p>{aboutContent.content3} </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-button">
                                    <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                                        <Link to="/contact"> <span className="theme-btn">Contact </span></Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About2;