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
            <a className="about_card" href="#experience">
              <MdOutlineAccessTime className="about_icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </a>
            <a className="about_card" href="https://www.betrybe.com/">
              <SlGraduation className="about_icon" />
              <h5>Trybe</h5>
              <small>40+ Aproves</small>
            </a>
            <a className="about_card" href="#portfolio">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>60+ Completed</small>
            </a>
          </div>
          <p>
            My goal is to find effective solutions to tackle the challenges of
            companies and their clients. I am highly motivated to understand
            needs, work as a team, and focus on developing solutions that have a
            positive impact on all parties involved. In this way, I am seeking
            an opportunity to use my creative thinking and problem-solving
            skills to contribute to the success of the company and its clients.
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
