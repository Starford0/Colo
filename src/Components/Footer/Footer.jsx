import "./Footer.css";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoPinterest } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className="footerwrapper">
        <div className="linkss">
          <div className="left">
            <p>Blogs</p>
            <p>FAQs</p>
            <p>Contact us</p>
          </div>
          <div className="right">
            <RiFacebookFill />
            <FaTwitter />
            <BsInstagram />
            <IoLogoPinterest />
          </div>
        </div>
        <div className="copywrite">
          <p>
            ©2018 All Rights Reserverd. Made withby Colorlib & distributed by
            ThemeWagon
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
