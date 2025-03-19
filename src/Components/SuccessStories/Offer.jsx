import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AdvertiseBanner = () => {
  return (
    <section className="advertise-banner-area position-relative">
      <div className="container">
        <div className="row">
          {/* Left Side Banner */}
          <div className="col-lg-8">
  <div
    className="advertise-banner p-4 d-flex justify-content-center align-items-center" 
  >
    <img
      src="assets/img/banner.png"
      alt="Banner"
      className="img-fluid"
      style={{ maxWidth: "100%", height: "auto" }}
    />
  </div>
</div>


          {/* Right Side Banner */}
          <div className="col-lg-4">
            <div
              className="advertise-banner bg-white text-dark p-4 "
              style={{
                backgroundImage: "url(assets/images/banner/star-vector.png)",
                backgroundSize: "contain",
                borderRadius: "10px",
              }}
            >
              <h3>
              Boost Your Business With 
                <br /> CMTAI
              </h3>
              <hr className="mb-3" />
              <div className="d-flex align-items-center">
               
                <span className="ms-3">
                Celebrate Holi with a special digital marketing offer! 🎉 Expand your reach on Instagram, Facebook, and YouTube, engage with customers, and boost your brand visibility. 
                <br />Don’t let your competitors get ahead—seize this opportunity to grow online. Offer valid until March 2025! Let’s make your business shine this festive season! 🚀
                </span>
              </div>
              
            <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                                <Link to="/contact"> <span className="theme-btn mt-5"> Contact Us </span></Link>
                            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertiseBanner;
