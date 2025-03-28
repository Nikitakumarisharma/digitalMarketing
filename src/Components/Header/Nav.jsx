import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className=" ">
        <Link to="/">Digital Marketing</Link>
       
      </li>
      <li className="">
        <Link to="Pr" onClick={() => setMobileToggle(false)}>
          PR Services
        </Link>
      </li>
      
      <li className="">
        <Link to="blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>
      {/* <li className="">
        <Link to="team" onClick={() => setMobileToggle(false)}>
          Our Team
        </Link>
      </li> */}
      <li className="">
        <Link to="Quotation" onClick={() => setMobileToggle(false)}>
          Get Quotation
        </Link>
      </li>
     
    </ul>
  );
}
