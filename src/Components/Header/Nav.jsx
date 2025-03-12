import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className=" ">
        <Link to="/">Digital Marketing</Link>
       
      </li>
      <li className="">
        <Link to="home2" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>
      
      <li className="">
        <Link to="blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>
      <li className="">
        <Link to="team" onClick={() => setMobileToggle(false)}>
          Our Team
        </Link>
      </li>
     
    </ul>
  );
}
