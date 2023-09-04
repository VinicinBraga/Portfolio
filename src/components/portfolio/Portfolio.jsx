import React from "react";
import "./portfolio.css";
import gym from "../../assets/portfolio-images/gym.png";
import dash from "../../assets/portfolio-images/dashboard.png";
import netflix from "../../assets/portfolio-images/Netflix.png";
import memory from "../../assets/portfolio-images/memory.png";
import meta from "../../assets/portfolio-images/metabase.png";
import agriculture from "../../assets/portfolio-images/Agriculture.png";

const data = [
  {
    id: 1,
    image: dash,
    title:
      "React Admin Dashboard App using Material UI, Data Grid, Light & Dark Mode",
    github: "https://github.com/VinicinBraga/Dashboard-app",
    demo: "https://dashboard-app-frontend.vercel.app",
  },
  {
    id: 2,
    image: meta,
    title:
      " Data analysis and SQL skills, intuitive and interactive visualizations",
    github: "https://github.com/VinicinBraga/Metabase-Dashboards",
    demo: "https://github.com/VinicinBraga/Metabase-Dashboards/blob/main/images/Orders1.png",
  },
  {
    id: 3,
    image: agriculture,
    title: "Data analysis using Google Colaboratory and Python skills, ",
    github: "https://github.com/VinicinBraga/Agricultural-Raw-Material-Project",
    demo: "https://github.com/VinicinBraga/Agricultural-Raw-Material-Project/blob/main/src/Agricultural_Raw_Material_ipymb.ipynb",
  },
  {
    id: 4,
    image: memory,
    title: "Game Application using React and Typescript",
    github: "https://github.com/VinicinBraga/Memory-Game/tree/main",
    demo: "https://memory-game-vinicinbraga.vercel.app",
  },
  {
    id: 5,
    image: gym,
    title: "Complete Typescript React Application using Tailwind",
    github: "https://github.com/VinicinBraga/Gym-App-Project",
    demo: "https://netflix-clone-git-main-vinicinbraga.vercel.app/",
  },
  {
    id: 6,
    image: netflix,
    title:
      "A clone of Netflix's landing page, built with React, JavaScript, and Material-UI.",
    github: "https://github.com/VinicinBraga/Netflix-Clone",
    demo: "https://netflix-clone-henna-nine.vercel.app",
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
