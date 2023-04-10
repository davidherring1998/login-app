import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"; // links to pages
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiFillCustomerService } from "react-icons/ai";
import "../assets/header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">Music Page <AiFillCustomerService /></div>
        <ul>
          <li>
            <FaSignInAlt /> &nbsp; Login
          </li>
          <li>
            <FaUser /> &nbsp; Register
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
