import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h2>Le Minh Triet (Triet Le)</h2>
        <h5 className="text-light">IT Student in Can Tho University</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down &rarr;
        </a>
      </div>
    </header>
  );
};

export default Header;
