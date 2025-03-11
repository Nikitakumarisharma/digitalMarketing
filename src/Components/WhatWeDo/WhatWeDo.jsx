import { Link } from "react-router-dom";
import parse from 'html-react-parser';

const WhatWeDo = () => {

    const heading = { 
        subtitle:"Services We Provide",
        title:'We help you build <br> powerful online presence',
        content:'Engage with your audience,<br> and drive measurable results.',  
      }

    const whyContent = [
        {img:'/assets/img/service/icon-1.png', title:'Search Engine Optimization (SEO)', content:'Improving website visibility on search engines through organic strategies.'},

        {img:'/assets/img/service/icon-2.png', title:'Search Engine Marketing (SEM)', content:'Running paid advertisements on search engines like Google Ads. '},

        {img:'/assets/img/service/icon-3.png', title:'Social Media Marketing (SMM)', content:'Promoting brands and engaging audiences on social platforms. '},

        {img:'/assets/img/service/icon-3.png', title:'Content Marketing', content:'Creating valuable content (blogs, videos, infographics) to attract and retain customers.'},

        {img:'/assets/img/service/icon-3.png', title:'Email Marketing', content:'Sending targeted emails for promotions, lead nurturing, and customer retention.'},

        {img:'/assets/img/service/icon-3.png', title:'Affiliate Marketing', content:'Partnering with affiliates to drive sales and earn commissions. '},

        {img:'/assets/img/service/icon-3.png', title:'Influencer Marketing', content:'Collaborating with influencers to boost brand awareness. '},

        {img:'/assets/img/service/icon-3.png', title:'E-commerce Marketing', content:'Strategies to increase online sales and customer engagement.'},

        {img:'/assets/img/service/icon-3.png', title:'Web Analytics & Data Insights', content:'Tracking and analyzing digital marketing performance. '},
      ];  

    return (
        <section className="service-section fix section-padding">
            <div className="left-shape float-bob-y">
                <img src="/assets/img/service/left-shape.png" alt="img" />
            </div>
            <div className="right-shape">
                <img src="/assets/img/service/right-shape.png" alt="img" />
            </div>
            <div className="bg-shape">
                <img src="/assets/img/service/bg-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <div className="sub-title wow fadeInUp">
                            <span>{heading.subtitle}</span>
                        </div>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        {parse(heading.title)}
                        </h2>
                    </div>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                    {parse(heading.content)}
                    </p>
                </div>
                <div className="row">
                {whyContent.map((item, i) => (
                    <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-box-items">
                            <div className="icon">
                                <img src={item.img} alt="img" />
                            </div>
                            <div className="content"> 
                                <h4><Link to="/service/service-details">{item.title}</Link></h4>
                                <p>{item.content}</p>
                                <Link to="/service/service-details" className="link-btn">Read More <i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    ))}


                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;