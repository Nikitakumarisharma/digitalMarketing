import React from "react";
import { MdContentPasteSearch ,MdScreenSearchDesktop,MdOutlineSocialDistance,MdAnimation,MdOutlineMissedVideoCall    } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { TbBinaryTree2 } from "react-icons/tb";
import { FaMobileScreenButton,FaPeopleRobbery, FaCartShopping ,FaRankingStar   } from "react-icons/fa6";
import { FaInstagram ,FaGoogle, FaYoutube,FaMagic ,FaIdCardAlt   } from "react-icons/fa";
import { PiFlagBannerFoldDuotone } from "react-icons/pi";
import { BsPostcardHeart } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { LuListVideo } from "react-icons/lu";


const words = [
  { text: "On-Page SEO ",icon: <MdContentPasteSearch />
  },
  { text: "Off-Page SEO", icon: <MdScreenSearchDesktop />
  },
  { text: "Technical SEO ", icon: <FaMobileScreenButton />
  },
  { text: "Influencer Marketing", icon: <FaPeopleRobbery />
  },
  
  
  { text: "Social Media Posting ", icon:<BsPostcardHeart />

  },
  { text: "Reels & Shorts Video Creation", icon: <FaInstagram />
  },
  { text: "Infographics Creation", icon: <TbBinaryTree2 />
  },
  { text: "Blog Writing", icon: <TfiWrite />
  },
  { text: "Google Search Ads", icon: <FaGoogle />
  },
  { text: "Display Ads (Banners)", icon: <PiFlagBannerFoldDuotone />
  },
  { text: "Video Ads (YouTube)", icon: <FaYoutube />
  },
  { text: "Social Media Ads", icon: <MdOutlineSocialDistance /> },
  { text: "Shopping Ads", icon: <FaCartShopping />
  },
  { text: "Promotional Videos", icon: <FaRankingStar />
  },
  { text: "Explainer Video", icon: <GiTeacher />
  },
  { text: "Video Production", icon: <MdOutlineMissedVideoCall />
  },
  { text: "Motion Graphics", icon: <LuListVideo />
  },
  { text: "Animation", icon: <MdAnimation />
  },
  { text: "Logo Design", icon: <FaMagic />
  },
  { text: "Visting Card Design", icon: <FaIdCardAlt />
  },
  
];

const FoodGrid = () => {
  return (
    <div style={{ maxWidth: "1600px", margin: "auto", padding: "10px", paddingBottom: "50px" }}>
      <div style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        gap: "20px", 
        justifyContent: "center", 
        textAlign: "center" 
      }}>
        {words.map((item, index) => (
          <div key={index} style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            justifyContent: "center", 
            padding: "15px", 
            border: "1px solid #ddd", 
            borderRadius: "28px", 
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)", 
            backgroundColor: "#fff",
            whiteSpace: "nowrap" 
          }}>
            <span style={{ fontSize: "24px", marginRight: "10px", color: "#6A47ED" }}>{item.icon}</span>
            <span style={{ fontWeight: "bold ",fontSize:"14px" }}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGrid;
