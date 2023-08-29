import React from "react";
import "./portfolio.css";
import fit from "../../assets/Fit.png";
import ecom from "../../assets/e-commerce.png";
import Netflix from "../../assets/NetflixAppClone.png";
import dots from "../../assets/dots.png";
import dash from "../../assets/Dashboard.png";
import travel from "../../assets/TravelApp.png";

const data = [
  {
    id: 1,
    image: fit,
    title: "Complete Typescript React Fitness Application",
    github: "https://github.com/VinicinBraga/Gym-App-Project",
    demo: "https://gym-app-project-six.vercel.app/",
  },
  {
    id: 2,
    image: ecom,
    title: "E-Commerce using React JS with Redux and Bootstrap",
    github: "https://github.com/VinicinBraga/E-commerce-App",
    demo: "e-commerce-app-phi-three.vercel.app",
  },
  {
    id: 3,
    image: Netflix,
    title: "Practicing and learning new skills in ReactJS, CSS and Rest API",
    github: "https://github.com/VinicinBraga/Netflix-Clone",
    demo: "https://netflix-clone-git-main-vinicinbraga.vercel.app/",
  },
  {
    id: 4,
    image: dots,
    title: "Solving a challenge using ReactJS",
    github: "https://github.com/VinicinBraga/Dots",
    demo: "https://practicing-react.vercel.app/",
  },
  {
    id: 5,
    image: dash,
    title:
      "React Admin Dashboard App using Material UI, Data Grid, Light & Dark Mode",
    github: "https://github.com/VinicinBraga/Adm-Dashboard",
    demo: "https://adm-dashboard-vinicinbraga.vercel.app/",
  },
  {
    id: 6,
    image: travel,
    title: "React with Redux E-Commerce Cart Project",
    github: "https://github.com/VinicinBraga/Hotel-Web",
    demo: "https://hotel-web-chi.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
