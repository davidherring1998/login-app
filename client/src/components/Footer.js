import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
import "../assets/footer.css";
function Footer() {
  return (
    <>
      <footer className="icon-container">
        <div className="icons">
          <AiFillGithub />
          <AiFillLinkedin  className="mid-icon"/>
          <AiFillTwitterCircle />
        </div>
        <p>&copy; David Herring 2023</p>
      </footer>
    </>
  );
}

export default Footer;
