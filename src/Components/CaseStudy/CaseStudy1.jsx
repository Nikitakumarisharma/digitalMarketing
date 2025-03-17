import { useEffect } from "react";
import { Link } from "react-router-dom";

const serviceLinks = [
  { id: "1", title: "SEO", fullTitle: "Search Engine Optimization (SEO)", description: "Improving website visibility on search engines through organic strategies." },
  { id: "2", title: "SEM", fullTitle: "Search Engine Marketing (SEM)", description: "Running paid advertisements on search engines like Google Ads." },
  { id: "3", title: "SMM", fullTitle: "Social Media Marketing (SMM)", description: "Promoting brands and engaging audiences on social platforms." },
  { id: "4", title: "Influencer", fullTitle: "Influencer Marketing", description: "Collaborating with influencers to boost brand awareness." }
];

const CaseStudy1 = () => {
  useEffect(() => {
    document.querySelectorAll(".box").forEach((box) => {
      box.addEventListener("mouseenter", function () {
        document
          .querySelectorAll(".box")
          .forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
      });
    });
  }, []);

  return (
    <section>
      <div className="case-study-section fix section-padding">
        <div className="overlay-shape">
          <img src="/assets/img/case-studies/overlay-shape.png" alt="img" />
        </div>
        <div className="left-shape float-bob-x">
          <img src="/assets/img/case-studies/left-shape.png" alt="img" />
        </div>
        <div className="right-shape float-bob-x">
          <img src="/assets/img/case-studies/right-shaape.png" alt="img" />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <div className="sub-title wow fadeInUp">
                <span>Services We Provide</span>
              </div>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                We help you build <br />
                powerful online presence
              </h2>
            </div>
            <div className="main-button wow fadeInUp" data-wow-delay=".5s">
              <Link to="/contact">
                {" "}
                <span className="theme-btn"> EXPLORE MORE </span>
               
              </Link>
            </div>
          </div>

          <div className="case-study-wrapper">
            <div className="row">
              <div className="col-xxl-6 wow fadeInUp">
                <div className="case-study-box-items">
                  <div className="thumb">
                    <img src="/assets/img/case-studies/01.jpg" alt="img" />
                    <div className="post-box-items ">
                      <ul>
                        <li>
                          <Link to="/service/service-details">
                            Web Analytics & Data Insights
                            <i className="bi bi-arrow-up-right"></i>
                          </Link>
                        </li>
                        
                      </ul>
                      <ul>
                        <li>
                          <Link to="/service/service-details">
                            Email Marketing {" "}
                            <i className="bi bi-arrow-up-right "></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/service/service-details">
                            E-commerce Marketing 
                            <i className="bi bi-arrow-up-right"></i>
                          </Link>
                        </li>
                        
                      </ul>
                    </div>
                    <h3 className="project-title">
                      <Link to="/service/service-details">
                        <img
                          src="/assets/img/case-studies/icon.png"
                          alt="img"
                        />
                        Digital Marketing
                      </Link>
                    </h3>
                    <span className="number">1</span>
                  </div>
                </div>
              </div>

        <div className="col-xxl-6">
      <div className="main-box">
        {serviceLinks.map((service, index) => (
          <div className={`box ${index === 2 ? "active" : ""} bg-${index + 1} wow fadeInUp`} key={service.id} data-wow-delay={`${index * 0.2}s`}>
            <div className="title-items">
              <h3>
                <Link to={`/service/${service.id}`}>{service.title}</Link>
              </h3>
              <span className="number">{index + 2}</span>
            </div>
            <span className="number-hover">{index + 2}</span>
            <div className="project-content">
              <h3>
                <Link to={`/service/${service.id}`}>{service.fullTitle}</Link>
              </h3>
              <p>{service.description}</p>
              <Link to={`/service/${service.id}`} className="link-btn">
                Read More <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy1;
