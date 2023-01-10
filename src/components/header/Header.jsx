import React from "react";
import CTA from "./CTA";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Vinícius Braga Matta</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
