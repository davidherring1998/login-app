import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"; // links to pages
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiFillCustomerService } from "react-icons/ai";
import "../assets/header.css";

function Header() {
  return (
    <>
      <header>
        <div className="logo">Music Page</div>
        <ul>
          <li>
            <FaSignInAlt /> Login
          </li>
          <li>
            <FaUser /> Register
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
