import About2 from "../Components/About/About2";
import Blog1 from "../Components/Blog/Blog1";
import Brand1 from "../Components/Brand/Brand1";
// import CaseStudy3 from "../Components/CaseStudy/CaseStudy3";
import Services from "../Components/Marquee/Marquee3";

import Counter1 from "../Components/Counter/Counter1";
import Cta1 from "../Components/Cta/Cta1";
import Cta2 from "../Components/Cta/Cta2";
// import Faq1 from "../Components/Faq/Faq1";
import HeroBanner2 from "../Components/HeroBanner/HeroBanner2";
// import Services1 from "../Components/Services/Services1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import WhatWeDo2 from "../Components/WhatWeDo/WhatWeDo2";
import ContactInfo1 from "../Components/ContactInfo/ContactInfo1";


const Home2 = () => {
    return (
        <div>
            <HeroBanner2></HeroBanner2>
            <Services></Services>
            <WhatWeDo2></WhatWeDo2>
            <Counter1></Counter1>
            {/* <Services1></Services1> */}
            <Cta1></Cta1>
            <About2 addclass="about-section-2 fix section-padding pt-0"></About2>
            {/* <Faq1 addclass="faq-section section-padding pb-0"></Faq1> */}
            <Cta2></Cta2>
            <Blog1></Blog1>
            <Testimonial1></Testimonial1>
            <ContactInfo1></ContactInfo1>
            <Brand1></Brand1>
        </div>
    );
};

export default Home2;