import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
const services = {
    "1": {
      title: "Search Engine Optimization (SEO)",
    description1:
        "SEO is the key to increasing your website’s visibility on search engines like Google. By optimizing your website with the right keywords, quality content, and technical improvements, you can attract more organic traffic and enhance your online presence.",
    description2:
        "A well-structured SEO strategy helps businesses improve their search rankings, reach their target audience, and increase brand credibility. Whether it's on-page optimization, link building, or content marketing, SEO ensures long-term success and sustainable growth.",
    whatWeProvide:
        "Our SEO services include keyword research, competitor analysis, on-page optimization, technical SEO, backlink building, and content creation. We focus on data-driven strategies to improve your rankings and drive high-quality traffic to your website.",
    challenge:
        "The biggest challenge in SEO is keeping up with search engine algorithms and increasing competition. Our expert team stays ahead of industry trends, ensuring that your website remains optimized and competitive in the ever-evolving digital landscape.",
    image: "/assets/img/service/s1.png",
    listItems: [
        "Comprehensive keyword research & analysis",
        "Technical SEO & website optimization",
        "Quality backlink building & off-page SEO",
        "SEO-optimized content creation & blogging",
        "Regular performance tracking & reporting",
    ]
    },
    "2": {
      title: "Search Engine Marketing (SEM)",
      description1:
          "Search Engine Marketing (SEM) is a powerful digital advertising strategy that helps businesses gain instant visibility on search engines like Google and Bing. Through paid ads, businesses can drive targeted traffic, increase conversions, and achieve measurable ROI.",
      description2:
          "With SEM, businesses can bid on keywords relevant to their products or services, ensuring their ads appear when potential customers search for them. Advanced targeting options, such as audience demographics, geolocation, and device preferences, make SEM highly effective for maximizing reach and conversions.",
      whatWeProvide:
          "Our SEM services include end-to-end campaign management, keyword research, ad creation, bid optimization, and continuous performance monitoring. We craft high-converting ad campaigns tailored to your business goals, ensuring the best return on investment.",
      challenge:
          "Successful SEM campaigns require ongoing optimization, bid management, A/B testing, and competitive keyword analysis. Without proper management, businesses risk overspending or targeting the wrong audience. Our experts ensure your SEM campaigns stay profitable and competitive.",
      image: "/assets/img/service/s2.png",
      listItems: [
          "Comprehensive keyword research & competitor analysis.",
          "Google Ads campaign setup, monitoring & optimization.",
          "Landing page optimization for higher conversion rates.",
          "Ad copywriting & A/B testing for better engagement.",
          "Budget management & performance tracking with analytics.",
      ]
    },
    "3": {
      title: "Social Media Marketing (SMM)",
      description1:
          "Social Media Marketing (SMM) is a game-changer for brands looking to build a strong online presence, connect with audiences, and drive engagement. By leveraging platforms like Facebook, Instagram, LinkedIn, and Twitter, businesses can enhance brand awareness and foster customer relationships.",
      description2:
          "An effective social media strategy goes beyond posting content; it involves audience research, data-driven campaigns, real-time engagement, and paid advertising. With tailored content and targeted promotions, businesses can boost reach, increase conversions, and achieve long-term growth.",
      whatWeProvide:
          "We craft and implement high-impact social media marketing strategies that align with your brand identity. Our services include content creation, ad campaign management, influencer collaborations, and community engagement to ensure your brand stays relevant and competitive.",
      challenge:
          "Navigating ever-changing social media algorithms, creating engaging content, and maintaining consistent audience interaction requires expertise and strategic execution. Our team ensures your brand thrives with optimized campaigns and real-time performance monitoring.",
      image: "/assets/img/service/s3.png",
      listItems: [
          "Custom social media content planning & scheduling.",
          "Targeted paid ad campaigns on Facebook, Instagram, LinkedIn & Twitter.",
          "Influencer partnerships for increased brand visibility & credibility.",
          "Community management & real-time engagement analysis.",
          "Performance tracking & ROI-driven social media strategies."
      ]
    },
    "4": {
      title: "Influencer Marketing",
    description1:
        "Influencer Marketing is one of the most powerful digital strategies for brand growth. By partnering with trusted influencers in your industry, businesses can boost brand awareness, credibility, and audience engagement effectively.",
    description2:
        "Leveraging the influence of content creators and social media personalities allows brands to reach niche audiences in an authentic way. With carefully planned influencer collaborations, businesses can enhance customer trust and drive higher conversions.",
    whatWeProvide:
        "We specialize in connecting brands with the right influencers who align with their vision and audience. Our team ensures seamless campaign execution, maximizing brand exposure and engagement through impactful collaborations.",
    challenge:
        "Identifying the right influencers, negotiating partnerships, ensuring brand alignment, and measuring campaign effectiveness require a strategic approach. Our expertise helps brands overcome these challenges and achieve measurable success.",
    image: "/assets/img/service/s4.png",
    listItems: [
        "Curating a network of niche-relevant influencers.",
        "Strategizing and executing engaging influencer campaigns.",
        "Monitoring key metrics to track performance and ROI.",
        "Enhancing audience engagement and brand authenticity.",
        "Managing long-term influencer partnerships for sustainable growth."
    ]
    },
  };
  

const ServiceDetails = () => {
    const { id } = useParams();
    const service = services[id] || services["1"]; 
     const faqContent = [
      {
        title: "Why Choose CMT AI For Digital Marketing?",
        content: "CMT AI offers result-driven digital marketing solutions with advanced AI-powered strategies. We provide personalized marketing plans, expert SEO services, data analytics, and performance-driven campaigns to maximize your ROI."
    },
      {
        title: "Why Is Digital Marketing Important For Small Business?",
        content: "Digital marketing helps small businesses compete with larger brands by increasing online visibility, driving targeted traffic, and improving customer engagement. It provides cost-effective solutions to build brand awareness and generate leads."
    },
    {
        title: "How Do I Choose The Best Digital Marketing Agency?",
        content: "Look for an agency with a strong portfolio, client testimonials, data-driven strategies, and expertise in your industry. A good agency should offer transparency, measurable results, and a customized marketing plan."
    },
    {
        title: "What Is The Difference Between SEO And PPC?",
        content: "SEO improves organic rankings and provides long-term results, while PPC (Pay-Per-Click) delivers instant traffic through paid ads. SEO is cost-effective over time, whereas PPC requires a budget for continuous visibility."
    },
    {
        title: "How Can Social Media Marketing Help My Business?",
        content: "Social media marketing boosts brand awareness, builds customer relationships, and drives traffic to your website. Platforms like Facebook, Instagram, and LinkedIn allow businesses to connect with their audience and increase engagement."
    },
   
          ]; 
    
          const accordionContentRef = useRef(null);
          const [openItemIndex, setOpenItemIndex] = useState(-1);
          const [firstItemOpen, setFirstItemOpen] = useState(true);
        
          const handleItemClick = index => {
            if (index === openItemIndex) {
              setOpenItemIndex(-1);
            } else {
              setOpenItemIndex(index);
            }
          };
          useEffect(() => {
            if (firstItemOpen) {
              setOpenItemIndex(0);
              setFirstItemOpen(false);
            }
          }, [firstItemOpen]);

    return (
        <section className="service-details-section section-padding">
            <div className="container">
                <div className="service-details-wrapper">
                    
                        
                        <div className=" col-lg-12">
                        <div className="container">
        <div className="service-details-wrapper">
          <div className="col-lg-12">
            <div className="service-details-content">
              <h3>{service.title}</h3>
              <p className="mb-4">{service.description1}</p>
              <p className="mb-4">{service.description2}</p>
              <h3>What We Provide</h3>
              <p className="mb-5">{service.whatWeProvide}</p>
              <div className="thumb">
                <img src={service.image} alt="img" />
              </div>
              <h3>The Challenge</h3>
              <p>{service.challenge}</p>
              <div className="details-list-items">
                <ul className="details-list">
                  {service.listItems.slice(0, 2).map((item, index) => (
                    <li key={index}>
                      <i className="bi bi-check-circle-fill"></i> {item}
                    </li>
                  ))}
                </ul>
                <ul className="details-list">
                  {service.listItems.slice(2).map((item, index) => (
                    <li key={index}>
                      <i className="bi bi-check-circle-fill"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/" className="text-blue-500">
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </div>

                            <div className="faq-wrapper mt-5">
                                <div className="faq-accordion-items">
                                    <div className="faq-accordion">
                                        <div className="accordion" id="accordion">

                                        {faqContent.map((item, index) => (
                                            <div key={index} className={`accordion-item mb-3 ${index === openItemIndex ? "active" : "" }`}   data-wow-delay=".3s">
                                                <h5 onClick={() => handleItemClick(index)} className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                    {item.title}
                                                    </button>
                                                </h5>
                                                <div ref={accordionContentRef} id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <div className="accordion-body">
                                                    {item.content}
                                                    </div>
                                                </div>
                                            </div>
                                            ))}

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

export default ServiceDetails;