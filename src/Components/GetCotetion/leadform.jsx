import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "../../firebase-config/firebase"; // Import Firebase config
import { collection, addDoc } from "firebase/firestore";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable"; // Import autoTable separately
import { MdOutlineSocialDistance } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaYoutube
  ,} from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";
import { TbDeviceMobileSearch } from "react-icons/tb";



const SocialMediaMarketingForm = () => {
  // SMM Section
  const [metaPosts, setMetaPosts] = useState(0);
  const [infographicReels, setInfographicReels] = useState(0);
  const [regularReels, setRegularReels] = useState(0);
  const [aiVoiceoverReels, setAiVoiceoverReels] = useState(0);
  const [humanVoiceoverReels, setHumanVoiceoverReels] = useState(0);

  // LinkedIn Section
  const [blogPosts, setBlogPosts] = useState(0);
  const [explainerVideos, setExplainerVideos] = useState(0);
  const [newsletters, setNewsletters] = useState(0);

  // Google My Business Section
  const [gmbPosts, setGmbPosts] = useState(0);

  // YouTube Section
  const [shortVideos, setShortVideos] = useState(0);
  const [longVideos, setLongVideos] = useState(0);

  // SEM Section
  const [adBudget, setAdBudget] = useState(0);
  const [GoogleBudget, setGoogleBudget] = useState(0);

  // SEO Selection
  const [seoPackage, setSeoPackage] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [totalAmount, setTotalAmount] = useState(null);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // New state for quotation modal
  const [showQuotationModal, setShowQuotationModal] = useState(false);
  const [quotationDetails, setQuotationDetails] = useState([]);

  // Pricing
  const prices = {
    metaPost: 249,
    infographicReel: 499,
    regularReel: 399,
    aiVoiceoverReel: 499,
    humanVoiceoverReel: 999,
    blogPost: 299,
    explainerVideo: 499,
    newsletter: 299,
    gmbPost: 299,
    shortVideo: 599,
    longVideo: 999,
    seoBasic: 5000,
    seoAdvanced: 10000,
    seoEnterprise: 50000,
  };

  // Calculate SEM commission
  const calculateSEMCommission = (budget) => {
    if (budget <= 10000) {
      return budget + budget * 0.2;
    } else if (budget <= 25000) {
      return budget + budget * 0.15;
    } else {
      return budget + budget * 0.1;
    }
  };

  // Handle Quotation Request
  const handleGetQuotation = () => {
    setShowModal(true);
  };

  // Handle Modal Close
  const handleCloseModal = () => {
    setShowModal(false);
    setName("");
    setContact("");
    setEmail("");
    setMessage("");
  };

  // Generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "normal");

    // Use direct URL of your logo (Ensure it's PNG/JPG, not SVG)
    const logoURL = "https://www.cmtai.live/assets/img/logo/logo-dark.png"; // Replace with actual logo path
    const imgWidth = 50;  
    const imgHeight = 20;  

    const image = new Image();
    image.crossOrigin = "anonymous"; // Allow cross-origin access
    image.src = logoURL;
    
    image.onload = function () {
        doc.addImage(image, "PNG", 20, 10, imgWidth, imgHeight); // Add the logo when loaded

        // Company Information
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text("Completrix MicroTechnologies Pvt Ltd", 20, 35);
        doc.setFont("helvetica", "normal");
        doc.text("E-23 Lower Ground Floor, Sector-3.", 20, 42);
        doc.text("Noida Uttar Pradesh", 20, 49);
        doc.text("201301", 20, 56);
        doc.text("+919818234884", 20, 63);

        // Recipient Information
        doc.setFont("helvetica", "bold");
        doc.text("To", 150, 35);
        doc.setFont("helvetica", "normal");
        doc.text(`Name: ${name}`, 150, 42);
        doc.text(`Contact: ${contact}`, 150, 49);

        // Unique PRO ID with "Digital Marketing Services" and Date
        const uniqueId = `PRO-${Math.floor(100000 + Math.random() * 900000)}`;
        const currentDate = new Date().toLocaleDateString();

        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text(`# ${uniqueId}`, 20, 75);
        doc.setFont("helvetica", "normal");
        doc.text("Digital Marketing Services", 20, 82);
        doc.text(`Date: ${currentDate}`, 20, 89);

        // Format table data correctly
        const tableData = quotationDetails.map((item) => [
            item.service,
            item.quantity,
            ` ${item.price.toLocaleString("en-IN")}`
        ]);

        // Pricing Table
        autoTable(doc, {
            startY: 100,
            head: [["Service", "Quantity", "Price"]],
            body: tableData,
            foot: [["Total Amount", "", ` ${totalAmount.toLocaleString("en-IN")}`]],
            theme: "grid",
            styles: { fontSize: 10 },
        });

        doc.save("quotation.pdf");
    };

    image.onerror = function () {
        console.error("Error loading logo image. Check the URL.");
    };
};




  // Handle Final Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /^[6-9]\d{9}$/;

    // Check if name and contact fields are filled
    if (!name || !contact) {
      alert("Please fill in all fields.");
      return;
    }

    // Validate phone number (must be 10 digits and start with 6, 7, 8, or 9)
    if (!phoneRegex.test(contact)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Calculate total and prepare quotation details
    let details = [];
    let total = 0;

    // Meta section
    if (metaPosts > 0) {
      details.push({
        service: "Meta Posts",
        quantity: metaPosts,
        price: metaPosts * prices.metaPost,
      });
      total += metaPosts * prices.metaPost;
    }
    if (infographicReels > 0) {
      details.push({
        service: "Infographic Reels",
        quantity: infographicReels,
        price: infographicReels * prices.infographicReel,
      });
      total += infographicReels * prices.infographicReel;
    }
    if (regularReels > 0) {
      details.push({
        service: "Regular Reels (30s)",
        quantity: regularReels,
        price: regularReels * prices.regularReel,
      });
      total += regularReels * prices.regularReel;
    }
    if (aiVoiceoverReels > 0) {
      details.push({
        service: "Reels with AI Voiceover",
        quantity: aiVoiceoverReels,
        price: aiVoiceoverReels * prices.aiVoiceoverReel,
      });
      total += aiVoiceoverReels * prices.aiVoiceoverReel;
    }
    if (humanVoiceoverReels > 0) {
      details.push({
        service: "Reels with Human Voiceover",
        quantity: humanVoiceoverReels,
        price: humanVoiceoverReels * prices.humanVoiceoverReel,
      });
      total += humanVoiceoverReels * prices.humanVoiceoverReel;
    }

    // LinkedIn section
    if (blogPosts > 0) {
      details.push({
        service: "LinkedIn Blog Posts",
        quantity: blogPosts,
        price: blogPosts * prices.blogPost,
      });
      total += blogPosts * prices.blogPost;
    }
    if (explainerVideos > 0) {
      details.push({
        service: "LinkedIn Explainer Videos",
        quantity: explainerVideos,
        price: explainerVideos * prices.explainerVideo,
      });
      total += explainerVideos * prices.explainerVideo;
    }
    if (newsletters > 0) {
      details.push({
        service: "LinkedIn Newsletters",
        quantity: newsletters,
        price: newsletters * prices.newsletter,
      });
      total += newsletters * prices.newsletter;
    }

    // Google My Business section
    if (gmbPosts > 0) {
      details.push({
        service: "Google My Business Posts",
        quantity: gmbPosts,
        price: gmbPosts * prices.gmbPost,
      });
      total += gmbPosts * prices.gmbPost;
    }

    // YouTube section
    if (shortVideos > 0) {
      details.push({
        service: "YouTube Video Editing (5 min)",
        quantity: shortVideos,
        price: shortVideos * prices.shortVideo,
      });
      total += shortVideos * prices.shortVideo;
    }
    if (longVideos > 0) {
      details.push({
        service: "YouTube Video Editing (10 min)",
        quantity: longVideos,
        price: longVideos * prices.longVideo,
      });
      total += longVideos * prices.longVideo;
    }

    // SEM section
    if (adBudget > 0) {
      const metaCommission = calculateSEMCommission(adBudget);
      details.push({
        service: "Meta Ads Commission",
        quantity: `Budget: ${adBudget}`,
        price: metaCommission,
      });
      total += metaCommission;
    }

    // Google Ads section with fixed calculation
    if (GoogleBudget > 0) {
      const googleCommission = calculateSEMCommission(GoogleBudget);
      details.push({
        service: "Google Ads Commission",
        quantity: `Budget: ${GoogleBudget}`,
        price: googleCommission,
      });
      total += googleCommission;
    }

    // SEO section
    if (seoPackage) {
      let seoPrice = 0;
      let seoName = "";
      if (seoPackage === "basic") {
        seoPrice = prices.seoBasic;
        seoName = "Basic SEO";
      } else if (seoPackage === "advanced") {
        seoPrice = prices.seoAdvanced;
        seoName = "Advanced SEO";
      } else if (seoPackage === "enterprise") {
        seoPrice = prices.seoEnterprise;
        seoName = "Enterprise SEO";
      }
      details.push({
        service: seoName,
        quantity: "1",
        price: seoPrice,
      });
      total += seoPrice;
    }

    // Update state with calculated values
    setQuotationDetails(details);
    setTotalAmount(total);

    // Save all data to Firebase after calculations
    try {
      await addDoc(collection(db, "digitalMarketLeadContact"), {
        // Basic Info
        name,
        contact,
        timestamp: new Date(),
        email,
        
        // SMM Section
        metaPosts,
        infographicReels,
        regularReels,
        aiVoiceoverReels,
        humanVoiceoverReels,
        
        // LinkedIn Section
        blogPosts,
        explainerVideos,
        newsletters,
        
        // Google My Business Section
        gmbPosts,
        
        // YouTube Section
        shortVideos,
        longVideos,
        
        // SEM Section
        adBudget,
        GoogleBudget,
        
        // SEO Section
        seoPackage,
        
        // Calculated Values
        totalAmount: total,
        quotationDetails: details,
      });

      // Close modal and show quotation
      setShowModal(false);
      setShowQuotationModal(true);
    } catch (error) {
      console.error("Error saving contact:", error);
      alert("Error saving your quotation. Please try again.");
    }
  };

  return (
    <div className="container my-5">

      <div className="row">
        {/* SMM Section */}
        <div className="col-md-12 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center mb-4 " style={{color:"#6A47ED"}}>
                
                <MdOutlineSocialDistance />&nbsp;
                Social Media Marketing(SMM)
              </h3>

              {/* Meta Subsection */}
              <div className="subsection mb-4">
  <h4 className="mb-3">
    Meta (<FaFacebook />&nbsp; FB+<RiInstagramFill />
      &nbsp; Insta)
  </h4>
  <div className="row d-flex align-items-center">
    {/* Meta Posts */}
    <div className="col-md-4 d-flex justify-content-between align-items-center">
      <label className="form-label m-0">No. of Meta Posts</label>
      <input
        type="number"
        className="form-control w-25"
        value={metaPosts}
        onChange={(e) => setMetaPosts(Number(e.target.value))}
        min="0"
      />
    </div>

    {/* Infographic Reels */}
    <div className="col-md-4 d-flex justify-content-between align-items-center">
      <label className="form-label m-0">No. of Infographic Reels</label>
      <input
        type="number"
        className="form-control w-25"
        value={infographicReels}
        onChange={(e) => setInfographicReels(Number(e.target.value))}
        min="0"
      />
    </div>

    {/* Regular Reels */}
    <div className="col-md-4 d-flex justify-content-between align-items-center">
      <label className="form-label m-0">No. of Regular Reels (30s)</label>
      <input
        type="number"
        className="form-control w-25"
        value={regularReels}
        onChange={(e) => setRegularReels(Number(e.target.value))}
        min="0"
      />
    </div>

    {/* AI Voiceover Reels */}
    <div className="col-md-4 d-flex justify-content-between align-items-center">
      <label className="form-label m-0">No. of Reels with AI Voiceover</label>
      <input
        type="number"
        className="form-control w-25"
        value={aiVoiceoverReels}
        onChange={(e) => setAiVoiceoverReels(Number(e.target.value))}
        min="0"
      />
    </div>

    {/* Human Voiceover Reels */}
    <div className="col-md-4 d-flex justify-content-between align-items-center">
      <label className="form-label m-0">No. of Reels with Human Voiceover</label>
      <input
        type="number"
        className="form-control w-25"
        value={humanVoiceoverReels}
        onChange={(e) => setHumanVoiceoverReels(Number(e.target.value))}
        min="0"
      />
    </div>
  </div>
</div>


              {/* LinkedIn Subsection */}
              <div className="subsection mb-4">
  <h4 className="mb-3"><FaLinkedin />&nbsp;
  LinkedIn</h4>
  <div className="row d-flex align-items-center">
    
    {/* Blog Posts */}
    <div className="col-md-4 d-flex justify-content-between align-items-center">
      <label className="form-label m-0">No. of Blog Posts with Keys</label>
      <input
        type="number"
        className="form-control w-50"
        value={blogPosts}
        onChange={(e) => setBlogPosts(Number(e.target.value))}
        min="0"
      />
    </div>

    {/* Explainer Videos */}
    <div className="col-md-4 d-flex justify-content-between align-items-center">
      <label className="form-label m-0">No. of Explainer Videos</label>
      <input
        type="number"
        className="form-control w-50"
        value={explainerVideos}
        onChange={(e) => setExplainerVideos(Number(e.target.value))}
        min="0"
      />
    </div>

    {/* Newsletters */}
    <div className="col-md-4 d-flex justify-content-between align-items-center">
      <label className="form-label m-0">No. of Newsletters</label>
      <input
        type="number"
        className="form-control w-50"
        value={newsletters}
        onChange={(e) => setNewsletters(Number(e.target.value))}
        min="0"
      />
    </div>
  </div>
</div>


              {/* Google My Business Subsection */}
              <div className="subsection mb-4">
  <h4 className="mb-3"><FaGoogle /> &nbsp;
  Google My Business</h4>
  <div className="row d-flex align-items-center">
    
    {/* Posts with Keywords */}
    <div className="col-md-4 d-flex justify-content-between align-items-center">
      <label className="form-label m-0">No. of Posts with Keywords</label>
      <input
        type="number"
        className="form-control w-50"
        value={gmbPosts}
        onChange={(e) => setGmbPosts(Number(e.target.value))}
        min="0"
      />
    </div>

  </div>
</div>


              {/* YouTube Subsection */}
              <div className="subsection mb-4">
  <h4 className="mb-3"><FaYoutube />&nbsp;
  YouTube</h4>
  <div className="row d-flex align-items-center">
    
    {/* Video Upto 5 min */}
    <div className="col-md-4 d-flex justify-content-between align-items-center">
      <label className="form-label m-0">No. of Video (Upto 5 min)</label>
      <input
        type="number"
        className="form-control w-50"
        value={shortVideos}
        onChange={(e) => setShortVideos(Number(e.target.value))}
        min="0"
      />
    </div>

    {/* Video Upto 10 min */}
    <div className="col-md-4 d-flex justify-content-between align-items-center">
      <label className="form-label m-0">No. of Video (Upto 10 min)</label>
      <input
        type="number"
        className="form-control w-50"
        value={longVideos}
        onChange={(e) => setLongVideos(Number(e.target.value))}
        min="0"
      />
    </div>

  </div>
</div>

            </div>
          </div>
        </div>

        {/* SEM Section */}
        <div className="col-md-6 mb-4">
  <div className="card shadow">
    <div className="card-body">
      <h3 className="card-title text-center mb-4" style={{color:"#6A47ED"}}>
      <MdPersonSearch />&nbsp;
      SEM
      </h3>

      <div className="row d-flex align-items-center">

        {/* Meta Ad Budget */}
        <div className="col-md-6 d-flex justify-content-between align-items-center">
          <label className="form-label m-0">
          Enter Your Meta Ad Budget</label>
          <input
            type="number"
            className="form-control w-50"
            value={adBudget}
            onChange={(e) => setAdBudget(Number(e.target.value))}
            min="0"
          />
        </div>

        {/* Google Ad Budget */}
        <div className="col-md-6 d-flex justify-content-between align-items-center">
          <label className="form-label m-0">
          Enter Your Google Ad Budget</label>
          <input
            type="number"
            className="form-control w-50"
            value={GoogleBudget}
            onChange={(e) => setGoogleBudget(Number(e.target.value))}
            min="0"
          />
        </div>

      </div>

    </div>
  </div>
</div>


        {/* SEO Section */}
        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center mb-4" style={{color:"#6A47ED"}}><TbDeviceMobileSearch />&nbsp;
              SEO Packages</h3>

              <div className="mb-3">
                {/* Add Label for SEO selection */}
                

                <select
                  id="seoPackage" // Add ID for accessibility
                  className="form-select"
                  value={seoPackage}
                  onChange={(e) => setSeoPackage(e.target.value)}
                >
                  <option value="">--Select SEO Package--</option>
                  <option value="basic">Basic SEO (5000₹)</option>
                  <option value="advanced">Advanced SEO(10000₹)</option>
                  <option value="enterprise">Enterprise SEO(50000₹)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="btn  w-100 mb-5 " style={{backgroundColor:"#6A47ED", color:"white",fontSize:"20px"}}
        onClick={handleGetQuotation}
      >
        Get Quotation
      </button>

      {/* Contact Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Get Quotation</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contact Number</label>
                    <input
                      type="text"
                      className="form-control"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Get Quotation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quotation Modal */}
      {showQuotationModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Your Quotation</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowQuotationModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Service</th>
                        <th>Quantity</th>
                        <th>Price (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quotationDetails.map((item, index) => (
                        <tr key={index}>
                          <td>{item.service}</td>
                          <td>{item.quantity}</td>
                          <td>{item.price}</td>
                        </tr>
                      ))}
                      <tr className="table-primary">
                        <td colSpan="2">
                          <strong>Total Amount</strong>
                        </td>
                        <td>
                          <strong>₹{totalAmount}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-center mt-4">
                  <button className="btn btn-primary" onClick={generatePDF}>
                    Download as PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaMarketingForm;
