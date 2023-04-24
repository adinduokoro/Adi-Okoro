import React from 'react'
import { homeData } from './data'

const HomeInfo = () => {
  return (
    <div className="home__data">
      {homeData.map((info, index) => {
        return(
          <div key={index}>
            <h1 className="home__title">{info.homeTitle}</h1>
            <h3 className="home__subtitle">{info.homeSubtitle}</h3>
            <p className="home__description">{info.homeDescription}</p>
            <a href="#contact" className="button button--flex">
              {info.buttonText}
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default HomeInfo