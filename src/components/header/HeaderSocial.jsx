import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/vinícius-braga" target="_blank">
        <BsLinkedin size={25} />
      </a>
      <a href="https://github.com/VinicinBraga" target="_blank">
        <FaGithub size={25} />
      </a>
      <a href="https://www.instagram.com/vini_braga85" target="_blank">
        <SiInstagram size={25} />
      </a>
    </div>
  );
};

export default HeaderSocial;
