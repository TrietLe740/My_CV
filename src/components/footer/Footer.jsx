import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo">
        I'M TRIET LE
        <br />
        THANK YOU FOR YOUR ATTENTION
      </a>
      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          target="blank"
          rel="noreferrer"
          href="https://www.facebook.com/triet.le.ctu"
        >
          <FaFacebookF />
        </a>
        <a target="blank" rel="noreferrer" href="https://github.com/TrietLe740">
          <BsGithub />
        </a>
        <a
          target="blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/triet-le-839596199"
        >
          <BsLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
