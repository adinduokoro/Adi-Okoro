import { Icon } from '@iconify/react';
import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My developer journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <Icon icon="uil:graduation-cap" className='qualification__icon' />
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <Icon icon="uil:briefcase-alt" className='qualification__icon'/>
            Experience
          </div>
        </div>

        <div className="qualification__sections">

          {/* Education */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Parkville High School</h3>
                <span className="qualification__subtitle">
                  Baltimore - Center of Technology
                </span>
                <div className="qualification__calender">
                  2009 - 2013
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">CCBC</h3>
                <span className="qualification__subtitle">
                  Baltimore - Community College
                </span>
                <div className="qualification__calender">
                  2013 - 2015
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Morgan State</h3>
                <span className="qualification__subtitle">
                  Baltimore - University
                </span>
                <div className="qualification__calender">
                  2015 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>

          </div>


          {/* Experience */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Tutor</h3>
                <span className="qualification__subtitle">
                  College/Wyzant - Baltimore 
                </span>
                <div className="qualification__calender">
                  2018 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">Freelance Developer</h3>
                <span className="qualification__subtitle">
                  Fiverr - Remote
                </span>
                <div className="qualification__calender">
                  2020 - current
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification