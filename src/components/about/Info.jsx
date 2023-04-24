import React from 'react'
import { cardBox } from './data'

const Info = () => {
  return (
    <div className="about__info grid">
      {cardBox.map((box, index) => {
        return(
          <div className="about__box" key={index}>
            <i className={box.icon + " about__icon"} ></i>
            <h3 className="about__title">{box.title}</h3>
            <span className="about__subtitle">{box.subtitle}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Info