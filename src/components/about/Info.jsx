import React from 'react'
import { cardBox } from './data'
import { Icon } from '@iconify/react';

const Info = () => {
  return (
    <div className="about__info grid">
      {cardBox.map((box, index) => {
        return(
          <div className="about__box" key={index}>
            <Icon icon={box.icon} className=" about__icon"/>
            <h3 className="about__title">{box.title}</h3>
            <span className="about__subtitle">{box.subtitle}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Info