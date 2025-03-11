import { useEffect, useState } from "react";
import { db } from "../../firebase-config/firebase"; // Import Firebase config
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { GoCommentDiscussion } from "react-icons/go";
import { SlCalender } from "react-icons/sl";

const Blog1 = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "digitalMarketingBlog")); // Fetch collection
                const blogData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    img: doc.data().img || "", // Fetch image
                    title: doc.data().description || "No Title", // Fetch title (description in Firestore)
                    comment: doc.data().comment || "0", // Fetch comment
                    date: doc.data().date || "Unknown Date" // Fetch date
                }));
                setBlogs(blogData);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <section className="news-section section-padding section-bg">
            <div className="container">
                <div className="section-title text-center">
                    <div className="sub-title bg-color-2 wow fadeInUp">
                        <span>BLOG & NEWS</span>
                    </div>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Use SEO to Drive Growth <br/> at Your Business
                    </h2>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    {blogs.slice(0, 4).map((item) => (
                        <div key={item.id} className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="news-box-items">
                                <div className="news-image wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                    <img src={item.img} alt="Blog Image" />
                                </div>
                                <div className="news-content">
                                    <ul className="post-cat" style={{color:"#6A47ED"}}>
                                        <li>
                                            <GoCommentDiscussion /> {item.comment} Comments
                                        </li>
                                        <li>
                                            <SlCalender /> {item.date}
                                        </li>
                                    </ul>
                                    <h5><Link to="/blog">{item.title}</Link></h5>
                                    <div className="news-btn">
                                        <Link to="/blog" className="link-btn">Read More <i className="bi bi-arrow-right"></i></Link>
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

export default Blog1;
