import { Link } from "react-router-dom";
import logo from "../imgs/logo.png"

const Header = () => {
  return (
    <nav class=" header  navbar navbar-expand-lg bg-black text-white ">
      <div class="container">
        <Link class=" header__brand  navbar-brand text-white" to={"/"}  target={true}>
        <img src={logo} alt="Logo" style={{width:"5rem",marginLeft:"4rem"}} />
          
        </Link>
        <button
          class="header__button navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="header__collapse collapse navbar-collapse " id="navbarNav">
          <ul class="header__list navbar-nav justify-content-end">
            <li class="header__item nav-item">
              <Link class=" header__link nav-link active text-white" aria-current="page" to={"/service"} target={true}>
                Services
              </Link>
            </li>
            <li class="header__list nav-item">
              <Link class="header__link nav-link text-white" to={"/work"} target={true}>
                Our Work
              </Link>
            </li>
            <li class="header__list nav-item">
              <Link class="header__link nav-link text-white" to={"/contact"} target={true}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
