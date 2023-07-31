import React from "react";
import "./certificates.css";
import google from "../../assets/Google.png";
import trybe from "../../assets/Trybe.png";
import { BsPatchCheckFill } from "react-icons/bs";

const certificate = () => {
  return (
    <section id="certificate">
      <h5>Building Knowledge and Expertise</h5>
      <h2>My Certifications</h2>

      <div className="container certificate_container">
        <div className="certificate_main">
          <h3>Google</h3>
          <div className="certificate_content">
            <article className="certificate_details">
              <BsPatchCheckFill className="certificate_details-icon" />
              <div>
                <h4>Data Analytics</h4>
                <div className="certificate_text">
                  <h5>
                    Graduated from Google's Data Analytics course, a program
                    specializing in technical and socio-emotional skills
                    pertinent to data analysis. Throughout the course, I gained
                    expertise in programming, databases, front-end, back-end,
                    and agile methodologies. Practical team projects facilitated
                    the development of communication, collaboration, and
                    problem-solving abilities, preparing me to excel in
                    real-world data analysis challenges.
                  </h5>
                </div>
              </div>
            </article>
            <div className="certificate_box_image">
              <img className="certificate_image" src={google}></img>
            </div>
          </div>
        </div>
        <div className="certificate_main">
          <h3>Trybe</h3>
          <div className="certificate_content">
            <article className="certificate_details">
              <BsPatchCheckFill className="certificate_details-icon" />
              <div>
                <h4>Web Developer (Full Stack)</h4>
                <div className="certificate_text">
                  <h5>
                    Graduated from Trybe, a software development school focused
                    on technical and socio-emotional skills. During the course,
                    I developed skills in programming, databases, front-end,
                    back-end, and agile methodologies. Additionally, I worked on
                    practical projects, which allowed me to develop skills in
                    communication, collaboration, and problem-solving.
                  </h5>
                </div>
              </div>
            </article>
            <div className="certificate_box_image">
              <img className="certificate_image" src={trybe}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default certificate;
