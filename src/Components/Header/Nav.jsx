import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className=" ">
        <Link to="/">Digital Marketing</Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link to="/home2" onClick={() => setMobileToggle(false)}>
              Home Version 2
              </Link>
            </li>
            <li>
              <Link to="/home3" onClick={() => setMobileToggle(false)}>
                Home Version 3
              </Link>
            </li>            
          </ul>
        </DropDown> */}
      </li>
      <li className="">
        <Link to="/home2">PR Services</Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link to="/home2" onClick={() => setMobileToggle(false)}>
              Home Version 2
              </Link>
            </li>
            <li>
              <Link to="/home3" onClick={() => setMobileToggle(false)}>
                Home Version 3
              </Link>
            </li>            
          </ul>
        </DropDown> */}
      </li>
      
      
      {/* <li className="menu-item-has-children">
        <Link to="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/about" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={() => setMobileToggle(false)}>
               Our Team
              </Link>
            </li>            
            <li>
              <Link to="/team/team-details" onClick={() => setMobileToggle(false)}>
                Team Details
              </Link>
            </li>             
            <li>
              <Link to="/pricing" onClick={() => setMobileToggle(false)}>
              Pricing
              </Link>
            </li> 
            <li>
              <Link to="/faq" onClick={() => setMobileToggle(false)}>
              Faq
              </Link>
            </li> 
            <li>
              <Link to="/contact" onClick={() => setMobileToggle(false)}>
              Contact
              </Link>
            </li>                         
          </ul>
        </DropDown>
      </li>   */}

      {/* <li className="menu-item-has-children">
        <Link to="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/service" onClick={() => setMobileToggle(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/service/service-details" onClick={() => setMobileToggle(false)}>
                Service Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}

      {/* <li className="menu-item-has-children">
        <Link to="/project" onClick={() => setMobileToggle(false)}>
        Project
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/project" onClick={() => setMobileToggle(false)}>
              Project
              </Link>
            </li>          
            <li>
              <Link to="/project/project-details" onClick={() => setMobileToggle(false)}>
              Project Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>  */}
      
      <li className="">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>
      <li className="">
        <Link to="/team" onClick={() => setMobileToggle(false)}>
          Our Team
        </Link>
      </li>
      {/* <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li> */}
    </ul>
  );
}
