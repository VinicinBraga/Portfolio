import React from "react";
import "./about.css";
import ME from "../../assets/Foto de Vinicius Braga.jpg";
import { MdOutlineAccessTime } from "react-icons/md";
import { SlGraduation } from "react-icons/sl";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="Me"></img>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <MdOutlineAccessTime className="about_icon" />
              <h5>
                <a href="#experience">Experience</a>
              </h5>
              <small>2+ Years</small>
            </article>
            <article className="about_card">
              <SlGraduation className="about_icon" />
              <h5>
                <a href="https://www.betrybe.com/">Trybe</a>
              </h5>
              <small>40+ Aproves</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>
                <a href="#portfolio">Projects</a>
              </h5>
              <small>60+ Completed</small>
            </article>
          </div>
          <p>
            My passion is finding innovative solutions to the challenges faced
            by businesses and their clients. With skills in HTML, CSS,
            Typescript, JavaScript, React, SQL, MongoDB, and NodeJS, I am a
            technology developer capable of achieving significant results. This
            combination makes me a great asset to any company.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
