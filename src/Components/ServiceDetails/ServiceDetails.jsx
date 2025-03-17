import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
const services = {
    "1": {
      title: "Search Engine Optimization (SEO)",
      description1:
        "At tempus aenean sapien torquent sed diam class efficitur mus morbi eros dictum quam augue ac laoreet ligula libero mi commodo nibh hac fermentum orci ad pharetra consequat justo duis turpis lorem elit dui consectetur magnis lacinia odio per placerat vestibulum volutpat mauris mollis primis imperdiet posu ere ex enim gravida cras congue.",
      description2:
        "Pellentesque vulputate malesuada dictumst fames interdum cursus ante tellus porta ullamcorper accumsan non eu adipiscing integer venenatis sagittis arcu curae finibus ridiculus aliquam velit lobortis senectus vitae sollicitudin sit consectetuer ultricies rutrum parturient pede nisi nascetur habitant netus quisque elementum inceptos nam felis penatibus feugiat.",
      whatWeProvide:
        "At tempus aenean sapien torquent sed diam class efficitur mus morbi eros dictum quam augue ac laoreet ligula libero mi commodo nibh hac fermentum orci ad pharetra consequat justo duis turpis lorem elit dui consectetur magnis lacinia odio per placerat vestibulum volutpat mauris mollis primis imperdiet posu ere ex enim gravida cras congue.",
      challenge:
        "At tempus aenean sapien torquent sed diam class efficitur mus morbi eros dictum quam augue ac laoreet ligula libero mi commodo nibh hac fermentum orci ad pharetra consequat justo duis turpis lorem elit dui consectetur magnis lacinia odio per placerat vestibulum volutpat mauris mollis primis imperdiet posu ere ex enim gravida cras congue.",
      image: "/assets/img/service/details-2.jpg",
      listItems: [
        "Various analysis options.",
        "Advance Data analysis operation.",
        "Page Load (time, size, number of requests).",
        "Advance Data analysis operation.",
      ],
    },
    "2": {
      title: "Search Engine Marketing (SEM)",
      description1:
        "Running paid advertisements on search engines like Google Ads to drive traffic and conversions.",
      description2:
        "With SEM, businesses can target specific keywords, demographics, and locations to maximize reach and effectiveness.",
      whatWeProvide:
        "We create, manage, and optimize search engine marketing campaigns tailored to your business needs.",
      challenge:
        "Managing paid advertising requires continuous optimization, keyword analysis, and bid strategy adjustments.",
      image: "/assets/img/service/details-2.jpg",
      listItems: [
        "Keyword research and targeting.",
        "Ad campaign setup and optimization.",
        "Conversion tracking and analytics.",
        "A/B testing and budget management.",
      ],
    },
    "3": {
      title: "Social Media Marketing (SMM)",
      description1:
        "Promoting brands and engaging audiences on social platforms to drive awareness and sales.",
      description2:
        "With social media strategies, businesses can create meaningful interactions and build brand loyalty.",
      whatWeProvide:
        "We develop and execute social media marketing campaigns that align with your brand's vision.",
      challenge:
        "Keeping up with platform algorithms, audience preferences, and content trends requires constant effort.",
      image: "/assets/img/service/details-2.jpg",
      listItems: [
        "Social media content planning.",
        "Paid ad campaigns on Facebook, Instagram, LinkedIn.",
        "Influencer collaboration and brand promotions.",
        "Community management and engagement analytics.",
      ],
    },
    "4": {
      title: "Influencer Marketing",
      description1:
        "Collaborating with influencers to boost brand awareness and reach a wider audience.",
      description2:
        "Influencer marketing leverages the trust and reach of popular personalities to promote your brand effectively.",
      whatWeProvide:
        "We connect brands with influencers that align with their industry and goals.",
      challenge:
        "Finding the right influencers, tracking ROI, and ensuring brand alignment can be complex.",
      image: "/assets/img/service/details-2.jpg",
      listItems: [
        "Identifying the right influencers.",
        "Campaign strategy and execution.",
        "Performance tracking and reporting.",
        "Audience engagement and feedback analysis.",
      ],
    },
  };
  

const ServiceDetails = () => {
    const { id } = useParams();
    const service = services[id] || services["1"]; 
     const faqContent = [
            {title:'Why Is SEO Important For Small Business?', content:'Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio.Mauris et mollis quam. Nullam fringilla erat id ante commodo maximus'},
            {title:'How do I choose the best SEO Agency?', content:'Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio.Mauris et mollis quam. Nullam fringilla erat id ante commodo maximus'},
            {title:'Better Security And Faster Server?', content:'Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio.Mauris et mollis quam. Nullam fringilla erat id ante commodo maximus'},
            {title:'Deployment Within Few Minutes', content:'Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio.Mauris et mollis quam. Nullam fringilla erat id ante commodo maximus'},
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