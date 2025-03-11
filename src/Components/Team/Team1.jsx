import { Link } from "react-router-dom";

const Team1 = () => {

    const teamContent = [
        {img:'/assets/img/team/01.jpg', name:'Anurag Singh', content:'CTO',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/02.jpg', name:'Dharmendra Singh', content:'CMO',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        
      ];

    return (
        <section className="team-section-3 fix py-5" >
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <div className="sub-title wow fadeInUp">
                            <span>OUR Founders</span>
                        </div>
                        <h3 className="wow fadeInUp" data-wow-delay=".3s">
                        We founded CMT AI with a passion for technology and a commitment <br /> to empowering businesses with innovative AI solutions.
                        </h3>
                    </div>
                    <div className="main-button wow fadeInUp" data-wow-delay=".5s">
                        <Link to="/team"> <span className="theme-btn">EXPLORE MORE </span><span className="arrow-btn"><i className="bi bi-arrow-up-right"></i></span></Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                   {teamContent.map((item, i) => (
                    <div key={i} className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="team-card-items">
                            <div className="team-image">
                                <img src={item.img} alt="img"  style={{height:"500px"}}/>
                            </div>
                            <div className="team-content">
                                <h3><Link to="/team/team-details">{item.name}</Link></h3>
                                <p>{item.content}</p>
                            </div>
                            <div className="icon-shape">
                                <img src="/assets/img/team/icon-shape.png" alt="img" />
                                <div className="social-profile">
                                    <ul>
                                        <li><Link to={item.content}><i className="bi bi-instagram"></i></Link></li>
                                        <li><Link to={item.content}><i className="bi bi-facebook"></i></Link></li>
                                        <li><Link to={item.content}><i className="bi bi-twitter-x"></i></Link></li>
                                        <li><Link to={item.content}><i className="bi bi-linkedin"></i></Link></li>
                                    </ul>
                                    <span className="plus-btn"><i className="bi bi-share"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                     ))}



                </div>
            </div>
        </section>
    );
};

export default Team1;