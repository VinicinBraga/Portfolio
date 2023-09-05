import React from "react";
import "./footer.css";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Vinícius Braga
      </a>

      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portifolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://github.com/VinicinBraga">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/vinícius-braga/">
          <FiLinkedin />
        </a>
        <a href="https://www.instagram.com/vini_braga85">
          <SiInstagram />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Vinícius Braga Matta</small>
      </div>
    </footer>
  );
};

export default Footer;
