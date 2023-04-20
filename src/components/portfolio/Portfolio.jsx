import React from "react";
import "./work.css";
import Works from "./Works";

const Portfolio = () => {
  return (
    <section class="work section" id="portfolio">
      <h2 class="section__title">Portfolio</h2>
      <span class="section__subtitle">My most recent work</span>
      <Works />
    </section>
  );
};

export default Portfolio;
