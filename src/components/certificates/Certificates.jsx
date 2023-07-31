import React from "react";
import "./certificates.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="certificate">
      <h5>Building Knowledge and Expertise</h5>
      <h2>My Certifications</h2>

      <div className="container experience_container">
        <div className="experience_data">
          <h3>Google</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Data analytics</h4>
                <small className="tect-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_dev">
          <h3>Trybe</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Web Developer (Full Stack)</h4>
                <small className="tect-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
