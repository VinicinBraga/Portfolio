import React from "react";
import "./experience.css";
import { BsShieldFillCheck } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_data">
          <h3>Data Analytics</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsShieldFillCheck className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="tect-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsShieldFillCheck className="experience_details-icon" />
              <div>
                <h4>SQL</h4>
                <small className="tect-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsShieldFillCheck className="experience_details-icon" />
              <div>
                <h4>Tableau</h4>
                <small className="tect-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsShieldFillCheck className="experience_details-icon" />
              <div>
                <h4>R</h4>
                <small className="tect-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsShieldFillCheck className="experience_details-icon" />
              <div>
                <h4>Power BI</h4>
                <small className="tect-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsShieldFillCheck className="experience_details-icon" />
              <div>
                <h4>Excel</h4>
                <small className="tect-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_dev">
          <h3>Developer</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsShieldFillCheck className="experience_details-icon" />
              <div>
                <h4>React JS</h4>
                <small className="tect-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsShieldFillCheck className="experience_details-icon" />
              <div>
                <h4>Typescrypt</h4>
                <small className="tect-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsShieldFillCheck className="experience_details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="tect-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsShieldFillCheck className="experience_details-icon" />
              <div>
                <h4>Express.js</h4>
                <small className="tect-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsShieldFillCheck className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="tect-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsShieldFillCheck className="experience_details-icon" />
              <div>
                <h4>MySQL</h4>
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
