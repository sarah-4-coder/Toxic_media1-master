import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer container-fluid">
      <div className="footer__upart u-margin-bottom-medium ">
        <div className="footer__logo-box">
          <img src={logo} alt="Logo" className="footer__img" />
          <h2 className="secondary-heading">toxic media</h2>
        </div>
        <div className="footer__line"></div>
        <div className="footer__icons">
          <div className="footer__facebook">
            <Link to="https://www.facebook.com">
              <i class="fa-brands fa-facebook-f" style={{ color: "black" }}></i>
            </Link>
          </div>
          <div className="footer__instagram">
            <Link to="https://www.instagram.com">
              <i
                class=" fa fa-brands fa-instagram  "
                style={{ color: "black" }}
              ></i>
            </Link>
          </div>
          <div className="footer__lindin">
            <Link to={"https://www.linkedin.com"}>
              <i
                class="fa-brands fa-linkedin-in fa "
                style={{ color: "black" }}
              ></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer__lpart u-margin-top-small">
        <div className="footer__card">
          <div className="footer__card--1">
            <ul className="footer__list">
              <li className="footer__item">
                <h3 className="heading-tertiary">Social</h3>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to="https://www.facebook.com">
                  FaceBook
                </Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to="https://www.instagram.com">
                  Instagram
                </Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to="https://www.linkedin.in">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__card--2">
            <ul className="footer__list">
              <li className="footer__item">
                <h3 className="heading-tertiary">Company</h3>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to={"/"} target={true}>
                  About
                </Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to={"/work"} target={true}>
                  Our Work
                </Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to={"/contact"} target={true}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__card--3">
            <ul className="footer__list">
              <li className="footer__item">
                <h3 className="heading-tertiary">Services</h3>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to={"/service"} target={true}>
                  Development
                </Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to={"/service"} target={true}>
                  3D Modelling
                </Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to={"/service"} target={true}>
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__copyright u-margin-top-big ">
        <p className="copyright__text">
          <i
            class="fa-regular fa-copyright"
            style={{ color: "#ffffff;", marginRight: "3px" }}
          ></i>
          {year} Toxic Media, All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
