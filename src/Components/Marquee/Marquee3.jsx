import React from "react";
import { MdContentPasteSearch ,MdScreenSearchDesktop,MdOutlineSocialDistance,MdAnimation,MdOutlineMissedVideoCall    } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { TbBinaryTree2 } from "react-icons/tb";
import { FaMobileScreenButton,FaPeopleRobbery, FaCartShopping ,FaRankingStar   } from "react-icons/fa6";
import { FaInstagram ,FaGoogle, FaYoutube,FaMagic ,FaIdCardAlt   } from "react-icons/fa";
import { PiFlagBannerFoldDuotone } from "react-icons/pi";
import { BsPostcardHeart } from "react-icons/bs";



const words = [
  { text:"Political PR",icon: <MdContentPasteSearch />
  },
  { text: "AI-Powered PR Solutions", icon: <MdScreenSearchDesktop />
  },
  { text: "Content PR", icon: <FaMobileScreenButton />
  },
  { text: "Event PR & Promotions", icon: <FaPeopleRobbery />
  }, 
  { text: "Political PR", icon:<BsPostcardHeart />
  },
  { text: "Celebrity & Influencer PR", icon: <FaInstagram />
  },
  { text: "Personal Branding", icon: <TbBinaryTree2 />
  },
  { text: "Media Relations & Publicity", icon: <TfiWrite />
  },
  { text: "Crisis Communication", icon: <FaGoogle />
  },
  { text:  "Reputation Management", icon: <PiFlagBannerFoldDuotone />
  },
  { text: "Social Media & Digital PR", icon: <FaYoutube />
  },
  { text: "Corporate PR", icon: <MdOutlineSocialDistance />
   },

  { text: "Celebrity & Influencer PR", icon: <FaCartShopping />
  },
  
  
];

const FoodGrid = () => {
  return (
    <div style={{ maxWidth: "1600px", margin: "auto", padding: "10px", paddingBottom: "50px"}}>
      <h2 style={{ 
  fontSize: "28px", 
  fontWeight: "bold", 
  marginBottom: "20px", 
  color: "#6A47ED", 
  textAlign: "center", 
  width: "100%",
  marginTop:"20px", 
}}>
  Services We Provide
</h2>

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
