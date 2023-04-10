import React from 'react'
import './service.css'
import { Icon } from '@iconify/react';

const Service = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className='section__subtitle'>Job Descriptions</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <Icon icon="uim:react" />
            <h3 className="services__title">React Developer</h3>
          </div>

          <span className="serices__button">
            View More{" "}
            <Icon icon="gridicons:popout" className='services__button-icon' />

            <div className="services__modal">
              <div className="services__modal-content">

                <Icon icon="uil:times" className='services__modal-close'/>

                <h3 className="services__modal-title"></h3>
                <p className="services__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ratione, rem, dignissimos soluta suscipit excepturi quae aliquid voluptas odit pariatur deserunt? Neque, nesciunt nihil quasi nisi ad facere dolorum quam!
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <Icon icon="material-symbols:check-circle-outline" />
                    <p className="services__modal-info">
                      I develope the user interface
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <Icon icon="material-symbols:check-circle-outline" />
                    <p className="services__modal-info">
                      I develope the user interface
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <Icon icon="material-symbols:check-circle-outline" />
                    <p className="services__modal-info">
                      I develope the user interface
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <Icon icon="material-symbols:check-circle-outline" />
                    <p className="services__modal-info">
                      I develope the user interface
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <Icon icon="material-symbols:check-circle-outline" />
                    <p className="services__modal-info">
                      I develope the user interface
                    </p>
                  </li>
                </ul>

              </div>
            </div>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Service

// React Developer
// Front-End Developer
// UI/UX Designer