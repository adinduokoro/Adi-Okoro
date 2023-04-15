import React, { useState } from 'react'
import './service.css'
import { Icon } from '@iconify/react';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">My Job Descriptions</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
          <Icon icon="uim:react" className='services__icon'/>
            <h3 className="services__title">
              React <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <Icon icon="gridicons:popout" className='services__button-icon' />
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <Icon icon="uil:times" className="services__modal-close" onClick={() => toggleTab(0)}/>
              <h3 className="services__modal-title">React Developer</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eos!
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <Icon icon="material-symbols:check-circle-outline" />
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>

                <li className="services__modal-service">
                  <Icon icon="material-symbols:check-circle-outline" />
                  <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                </li>

                <li className="services__modal-service">
                  <Icon icon="material-symbols:check-circle-outline" />
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>

                <li className="services__modal-service">
                  <Icon icon="material-symbols:check-circle-outline" />
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>

                <li className="services__modal-service">
                  <Icon icon="material-symbols:check-circle-outline" />
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
          <Icon icon="uim:react" className='services__icon'/>
            <h3 className="services__title">
              Front-end <br /> Designer
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            View More
            <Icon icon="gridicons:popout" className='services__button-icon' />
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <Icon icon="uil:times" className="services__modal-close" onClick={() => toggleTab(0)}/>
              <h3 className="services__modal-title">Front-end Developer</h3>
              <p className="services__modal-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eos!
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <Icon icon="material-symbols:check-circle-outline" />
                  <p className="services__modal-info">
                  Lorem ipsum dolor sit amet.
                  </p>
                </li>

                <li className="services__modal-service">
                  <Icon icon="material-symbols:check-circle-outline" />
                  <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                </li>

                <li className="services__modal-service">
                  <Icon icon="material-symbols:check-circle-outline" />
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>

                <li className="services__modal-service">
                  <Icon icon="material-symbols:check-circle-outline" />
                  <p className="services__modal-info">
                  Lorem ipsum dolor sit amet.
                  </p>
                </li>

                <li className="services__modal-service">
                  <Icon icon="material-symbols:check-circle-outline" />
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <Icon icon="uim:react" className='services__icon'/>
            <h3 className="services__title">
              UI/UX <br /> Designer
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            View More
            <Icon icon="gridicons:popout" className='services__button-icon' />
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
            <Icon icon="uil:times" className="services__modal-close" onClick={() => toggleTab(0)}/>
              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eos!
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <Icon icon="material-symbols:check-circle-outline" />
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>

                <li className="services__modal-service">
                  <Icon icon="material-symbols:check-circle-outline" />
                  <p className="services__modal-info">  Lorem ipsum dolor sit amet.</p>
                </li>

                <li className="services__modal-service">
                  <Icon icon="material-symbols:check-circle-outline" />
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>

                <li className="services__modal-service">
                  <Icon icon="material-symbols:check-circle-outline" />
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>

                <li className="services__modal-service">
                <Icon icon="material-symbols:check-circle-outline" />
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;