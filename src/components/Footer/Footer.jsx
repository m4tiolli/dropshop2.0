import "./Footer.css";
import logo from "../../assets/logo_white.png";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div>
      <div id="backfooter"></div>
      <div className="footer">
        <div id="contacts">
          <div className="infos">
            <BiLogoLinkedinSquare />
            <p>/gabrielmatiolli</p>
          </div>
          <div className="infos">
            <IoMdMail />
            <p>gabrielmatiollif@gmail.com</p>
          </div>
        </div>
        <img id="imgfooter" src={logo} alt="" />
        <div id="linkvend">
          <p onClick={() => navigate("/vendedor/home")} className="link">
            dropshop para vendedores
          </p>
          <p>sobre o projeto</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
