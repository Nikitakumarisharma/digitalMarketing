import { Outlet } from 'react-router-dom';
import Header1 from '../Components/Header/Header1';
import Footer1 from '../Components/Footer/Footer1';
import ScrollToTop from "../Components/ScrollToTop";


const Layout2 = () => {
    return (
        <div className='main-page-area2'>
                         <ScrollToTop />

            <Header1></Header1>
            <Outlet></Outlet>
            <Footer1></Footer1>
        </div>
    );
};

export default Layout2;