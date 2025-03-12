import About1 from "../Components/About/About1";
import Blog1 from "../Components/Blog/Blog1";
import CaseStudy1 from "../Components/CaseStudy/CaseStudy1";
import Service from "../Components/Services/service"
import ContactInfo1 from "../Components/ContactInfo/ContactInfo1";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Marquee1 from "../Components/Marquee/Marquee1";
// import Pricing1 from "../Components/Pricing/Pricing1";
import SuccessStories from "../Components/SuccessStories/SuccessStories";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
// import WhatWeDo from "../Components/WhatWeDo/WhatWeDo";
import WhyChoose1 from "../Components/WhyChoose/WhyChoose1";
import Client from "../Components/Brand/Brand1";
// import ChatBot from "../Components/chatbot";
// import Team1 from "../Components/Team/Team1"

const Home = () => {
    return (
        <div>
            <HeroBanner1></HeroBanner1>
            <Marquee1></Marquee1>
            <CaseStudy1></CaseStudy1>
            <Service />
            {/* <WhatWeDo></WhatWeDo> */}
            <About1></About1>
            <SuccessStories></SuccessStories>
            <WhyChoose1></WhyChoose1>
            {/* <Team1/> */}
            {/* <Pricing1 CoulmnClass="pricing-section fix section-padding section-bg"></Pricing1> */}
            <Testimonial1></Testimonial1>
            <ContactInfo1></ContactInfo1>
            <Blog1></Blog1>
            <Client />
            {/* <ChatBot/> */}
        </div>
    );
};

export default Home;