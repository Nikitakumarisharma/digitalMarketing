import { useEffect } from "react";
import { Link } from "react-router-dom";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Footer1 = () => {

        useEffect(() => {
            loadBackgroudImages();
        }, []);

    return (
        <div>
             <section className="cta-section section-bg  pb-0">
            <div className="rokect-shape float-bob-y">
                <img src="/assets/img/rokect.png" alt="img" />
            </div>
            <div className="container">
                <div className="cta-wrapper bg-cover" data-background="/assets/img/cta-bg.jpg">
                    <div className="cta-img wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s">
                        <img src="/assets/img/cta-img.png" alt="img" />
                    </div>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Stay Connected With <br/> Cutting Edge IT
                    </h2>
                    <div className="main-button wow fadeInUp" data-wow-delay=".5s">
                    <a href="tel:+919818234884"> 
  <span className="theme-btn"> Talk TO A SPECIALIST </span>
 
</a>
                    </div>
                </div>
            </div>
        </section>

        <section className="footer-section footer-bg fix">
            <div className="container">
                <div className="footer-widgets-wrapper">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <a href="index.html">
                                        <img src="/assets/img/logo/logo white.svg" alt="img" style={{height:"50px",width:"180px"}}/>
                                    </a>
                                </div>
                                <div className="footer-content">
                                    <p>
                                From Concept to Code We craft Technologies That defines Excellence With Precision in Every Pixel, CMT AI Leads the Innovation Wave.
                                    </p>
                                     <div className="social-icon d-flex align-items-center">
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                        <a href="#"><i className="bi bi-youtube"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <Link to="/">
                                        <i className="bi bi-arrow-right"></i>
                                            Digital Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Pr">
                                        <i className="bi bi-arrow-right"></i>
                                            PR Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                        <i className="bi bi-arrow-right"></i>
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">
                                        <i className="bi bi-arrow-right"></i>
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Recent Posts</h3>
                                </div>
                                <div className="recent-post-area">
                                    <div className="recent-post-items">
                                        
                                        <div className="content">
                                            <ul className="post-date">
                                                <li>
                                                    <i className="fa-solid fa-calendar-days me-2"></i>
                                                    20 Feb, 2024
                                                </li>
                                            </ul>
                                            <h6>
                                                <Link to="/blog">
                                                Building a Positive <br />Brand Image with PR
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="recent-post-items mb-0">
                                        
                                        <div className="content">
                                            <ul className="post-date">
                                                <li>
                                                    <i className="fa-solid fa-calendar-days me-2"></i>
                                                    15 Dec, 2024
                                                </li>
                                            </ul>
                                            <h6>
                                                <Link to="/blog">
                                                How PR Can Strengthen <br /> Your Brand Identity  
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Contact Us</h3>
                                </div>
                                <div className="footer-content">
                                    <ul className="contact-info">
                                        <li>
                                            <i className="fa-regular fa-envelope"></i>
                                            <a href="mailto:info@cmtai.in

">info@cmtai.in

</a>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-phone-volume"></i>
                                            <a href="tel:2086660112">919818234884
</a>
                                        </li>
                                    </ul>
                                    <div className="footer-input">
                                        <input type="email" id="email2" placeholder="Your email address" /> 
                                        <button className="newsletter-btn" type="submit">
                                        <i className="bi bi-arrow-right"></i>
                                        </button>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"  id="flexCheckChecked"  />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            I agree to the <a href="#">Privacy Policy.</a>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                            © All Copyright 2025 by CMT AI
                        </p>
                        <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                            <li>
                                <a href="#">
                                    Terms & Condition       
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <a href="#" id="scrollUp" className="scroll-icon">
                <i className="bi bi-arrow-up"></i>
                </a>
            </div>
        </section>

        </div>
    );
};

export default Footer1;