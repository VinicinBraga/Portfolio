import React from "react";
import CTA from "./CTA";
import ME from "../../assets/mainPhto.jpg";
import HeaderSocial from "./HeaderSocial";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I'm</h4>
        <h1 className="text-primary">Vinícius Braga Matta</h1>
        <h4>Data Analytics | Web Developer</h4>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
