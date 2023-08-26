import reactLogo from "../assets/react.svg";
import { BsSearch } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";
import { MdOutlineStorage } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <header className="brandname">
        <img className="logo" src={reactLogo} alt="" />
        <h3>React</h3>
      </header>
      <ul className="menu">
        <li>
          <BsSearch className="icon" />
          <p>serach</p>
        </li>
        <li>
          <AiFillHome className="icon" />
          <p>dashboard</p>
        </li>
        <li>
          <IoMdNotifications className="icon" />
          <p>notifications</p>
        </li>
        <li>
          <SiGoogleanalytics className="icon" />
          <p>Analytics</p>
        </li>
        <li>
          <MdOutlineStorage className="icon" />
          <p>storage</p>
        </li>
      </ul>

      <footer>
        <ul className="menu">
          <li>
            <RiLogoutBoxLine className="icon" />
            <p>logout</p>
          </li>
        </ul>        
        <p>&copy; copyright {new Date().getFullYear()}</p>
      </footer>

    </aside>
  );
};

export default Sidebar;
