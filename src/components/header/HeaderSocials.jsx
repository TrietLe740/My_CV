import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/triet-le-839596199/" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/TrietLe740" target="blank">
        <BsGithub />
      </a>
      <a href="https://www.facebook.com/triet.le.ctu" target="blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
