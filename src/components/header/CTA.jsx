import React from "react";
import CV from "../../assets/Currículo-ViníciusBraga.pdf";
import { BiMessageSquareDetail } from "react-icons/bi";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn">
        Let's Talk <BiMessageSquareDetail />
      </a>
    </div>
  );
};

export default CTA;
