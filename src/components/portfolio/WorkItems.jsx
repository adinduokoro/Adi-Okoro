import React from "react";
import { Icon } from '@iconify/react';

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="project__buttons">
        <a href={item.demoPath} className="work__button" target="_blank">
          Demo
          <Icon icon="uil:arrow-circle-right" className="work__button-icon" />
        </a>
        <a href={item.codePath} className="work__button" target="_blank">
          Code
          <Icon icon="tabler:source-code" className="work__button-icon" />
        </a>
      </div>

    </div>
  );
};

export default WorkItems;
