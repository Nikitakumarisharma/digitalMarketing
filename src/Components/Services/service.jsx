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
  { text: "Blog Writing", icon: <TfiWrite />
  },
  { text: "Infographics Creation", icon: <TbBinaryTree2 />
  },
  { text: "Technical SEO ", icon: <FaMobileScreenButton />
  },
  { text: "Social Media Posting ", icon:<BsPostcardHeart />

  },
  { text: "Reels & Shorts Video Creation", icon: <FaInstagram />
  },
  { text: "Influencer Marketing", icon: <FaPeopleRobbery />
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
  { text: "Logo Design", icon: <FaMagic />
  },
  { text: "Motion Graphics", icon: <LuListVideo />
  },
  { text: "Visting Card Design", icon: <FaIdCardAlt />
  },
  { text: "Animation", icon: <MdAnimation />
  },
  { text: "Video Production", icon: <MdOutlineMissedVideoCall />
  },
];

const FoodGrid = () => {
  return (
    <div style={{ maxWidth: "1400px", margin: "auto", padding: "10px",  paddingBottom:"100px"}}>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: "20px", 
        textAlign: "center" 
      }}>
        {words.map((item, index) => (
          <div key={index} style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            padding: "15px", 
            border: "1px solid #ddd", 
            borderRadius: "8px", 
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)", 
            backgroundColor: "#fff" 
          }}>
            <span style={{ fontSize: "24px", marginRight: "10px", color:"#6A47ED" }}>{item.icon}</span>
            <span style={{ fontWeight: "bold" }}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGrid;
