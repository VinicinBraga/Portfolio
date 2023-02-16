import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/vinícius-braga/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/VinicinBraga" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/vinicius.b.matta" target="_blank">
        <ImFacebook2 />
      </a>
    </div>
  );
};

export default HeaderSocial;
