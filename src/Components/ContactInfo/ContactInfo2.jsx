
const ContactInfo2 = () => {
    return (
        <div>
        <section className="contact-info-section fix section-padding"style={{ backgroundImage: `url("/assets/img/audience-bg.jpg")`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s ">
                        <div className="contact-info-items text-center active">
                            <div className="icon">
                            <i className="bi bi-geo-alt-fill"></i>
                            </div>
                            <div className="content">
                                <h3>Our Address</h3>
                                <p>
                                CMT AI,

E-23 Lower Ground Floor, Sector-3. NOIDA,Uttar Pradesh , India.

PIN-201301
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="contact-info-items text-center">
                            <div className="icon">
                            <i className="bi bi-envelope-fill"></i>
                            </div>
                            <div className="content">
                                <h3><a href="mailto:info@cmtai.in

">info@cmtai.in

</a></h3>
                                <p>
                                    Email us anytime for any kind <br/>
                                    of query.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="contact-info-items text-center">
                            <div className="icon">
                            <i className="bi bi-telephone-fill"></i>
                            </div>
                            <div className="content">
                                <h3><a href="tel:+2086660112">919818234884
</a></h3>
                                <p>
                                    Call us any kind suppor,we <br/>
                                    will wait for it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact-section-33 fix section-padding pt-5">
            <div className="container">
                <div className="contact-wrapper-2">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6 ">
                            <div className="map-items">
                                <div className="googpemap">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.600293748297!2d77.31845179999999!3d28.581763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce53708916071%3A0x432816975a2fe899!2sCMT%20AI!5e0!3m2!1sen!2sin!4v1741414810440!5m2!1sen!2sin" width="600" height="450" loading="lazy" ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 ">
                        <h2>Ready to Get Started?</h2>
                                <p>
                                Unlock success with us! Experience the best in digital marketing and PR solutions.
                                </p>
                            <div className="map-items">
                                <div className="googpemap">
                                <iframe width="600" height="500" src="https://crm.cmtai.cloud/forms/wtl/10722ba8db4b4abc95726faf62d04f4e" sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>           
        </div>
    );
};

export default ContactInfo2;