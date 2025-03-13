import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase-config/firebase"; // Adjust path based on your project structure
import { doc, getDoc } from "firebase/firestore";

const BlogDetails = () => {
    const { id } = useParams(); // Get blog ID from URL
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const docRef = doc(db, "digitalMarketingBlog", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setBlog(docSnap.data());
                } else {
                    console.log("No such blog found!");
                }
            } catch (error) {
                console.error("Error fetching blog details:", error);
            }
        };

        if (id) {
            fetchBlogDetails();
        }
    }, [id]);

    if (!blog) {
        return <h2>Loading...</h2>;
    }

    return (
        <section className="news-details-section ">
            <div className="container">
                <div className="news-details-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="news-post-details">
                                <div className="single-news-post">
                                    <div className="post-content">
                                        <h3>{blog.heading}</h3> {/* ✅ headinglg from Firebase */}
                                        <ul className="post-list d-flex align-items-center">
                                            <li>
                                                <i className="fa-regular fa-user"></i>
                                                By Admin
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-calendar-days"></i>
                                                {blog.date} {/* ✅ date from Firebase */}
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-tag"></i>
                                                {blog.tags?.join(", ")} {/* ✅ tags from Firebase */}
                                            </li>
                                        </ul>
                                        <p className="mb-3">{blog.descriptionLg}</p> {/* ✅ descriptionLg from Firebase */}
                                        <p className="mb-3">{blog.text}</p> {/* ✅ text from Firebase */}
                                        

                                        <div className="row g-4">
                                            <div className="col-lg-6">
                                                <div className="details-image">
                                                    <img src={blog.img1 || "/assets/img/news/details-2.jpg"} alt="img" /> {/* ✅ img1 from Firebase */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="details-image">
                                                    <img src={blog.img2 || "/assets/img/news/details-3.jpg"} alt="img" /> {/* ✅ img2 from Firebase */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hilight-text mt-4">
                                            <p>
                                            {blog.quote}
                                            </p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                                <path d="M7.71428 20.0711H0.5V5.64258H14.9286V20.4531L9.97665 30.3568H3.38041L8.16149 20.7947L8.5233 20.0711H7.71428Z" stroke="#6A47ED"></path>
                                                <path d="M28.2846 20.0711H21.0703V5.64258H35.4989V20.4531L30.547 30.3568H23.9507L28.7318 20.7947L29.0936 20.0711H28.2846Z" stroke="#6A47ED"></path>
                                            </svg>
                                        </div> {/* ✅ quote from Firebase */}

                                        <div className="row tag-share-wrap mt-4 mb-5">
                                    <div className="col-lg-8 col-12">
                                    <div className="tagcloud">
                                                    <span>Tags:</span>
                                                    {blog.tags?.map((tag, index) => (
                                                        <a key={index} href="#">{tag}</a> /* ✅ tags dynamically mapped */
                                                    ))}
                                                </div>
                                    </div>
                                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                                        <div className="social-share">
                                            <span className="me-3">Share:</span>
                                            <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                        <a href="#"><i className="bi bi-youtube"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>                                 
                                        </div>
                                    </div>
                                </div>

                                        <div className="comments-area">
                                            <div className="comments-heading">
                                                <h3>Comments</h3>
                                            </div>
                                            <div className="blog-single-comment d-flex gap-4 pt-4 pb-5">
                                                <div className="content">
                                                    <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                                        <div className="con">
                                                            <h5>{blog.commentName}</h5> {/* ✅ commentName */}
                                                            <span>{blog.commentdate}</span> {/* ✅ commentDate */}
                                                        </div>
                                                    </div>
                                                    <p className="mt-30 mb-4">{blog.commentDiscription }</p> {/* ✅ commentDescription */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="comment-form-wrap py-5">
                                            <h3>Connect With Us</h3>
                                            <form action="#" id="contact-form" method="POST">
                                                <div className="row g-4">
                                                    <div className="col-lg-6">
                                                        <div className="form-clt">
                                                            <span>Your Name*</span>
                                                            <input type="text" name="name" placeholder="Your Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-clt">
                                                            <span>Your Email*</span>
                                                            <input type="text" name="email" placeholder="Your Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-clt">
                                                            <span>Message*</span>
                                                            <textarea name="message" placeholder="Write Message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <button type="submit" className="theme-btn">
                                                            Send<i className="fa-solid fa-arrow-right-long"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

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

export default BlogDetails;
