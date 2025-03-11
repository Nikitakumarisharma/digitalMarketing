import { useEffect, useState } from "react";
import { db } from "../../firebase-config/firebase"; // Import Firebase config
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { GoCommentDiscussion } from "react-icons/go";


const Blog4 = () => {

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
        <section className="news-section section-padding fix">
        <div className="container">
            <div className="row g-4">
            {blogs.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                    <div className="news-box-items mt-0">
                        <div className="news-image wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.2s">
                            <img src={item.img} alt="img" />
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
                            <h5><Link to={`/blog/${item.id}`}>{item.title}</Link></h5>
                            <div className="news-btn">
                            <Link to={`/blog/${item.id}`} className="link-btn">Read More <i className="bi bi-arrow-right"></i></Link>
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

export default Blog4;