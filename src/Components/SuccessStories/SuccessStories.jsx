import React from "react";
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const SuccessStories = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="audience-section fix  bg-cover"
      data-background="/assets/img/audience-bg.jpg"
    >
      <div className="container">
        <div className="audience-wrapper ">
          <div className="row ">
            <div className="col-lg-6 py-5">
              <div className="audience-content py-3 ">
                <div className="section-title">
                  <div className="sub-title bg-color-3 wow fadeInUp">
                    <span className="wow fadeInUp">More clicks, more sales, more success!</span>
                  </div>
                  <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                  Your brand’s story, told in every post!
                  </h2>
                </div>
                <div className="client-items wow fadeInUp" data-wow-delay=".5s">
                  
                  <div className="client-img">
                    <img src="/assets/img/logo/logo white.svg" alt="img" style={{height:"20px"}}/>
                    <div className="star-icon">
                      <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <span>1 k+ reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
                <DotLottieReact
                  src="https://lottie.host/11a19107-cbff-43d4-ad32-d6137d5ce730/0x86xfj5IN.lottie"
                  loop
                  autoplay
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
