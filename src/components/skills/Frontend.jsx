import React from 'react'
import { Icon } from '@iconify/react';
import { frontendSkills } from './data';

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Dev.</h3>
      <div className="skills__box">
        {frontendSkills.map((skill , index) => {
          return(
            <div className="skills__data" key={index}>
              <Icon icon={skill.icon} className='skills-icon'/>
              <div>
                <h3 className="skills__name">{skill.text}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Frontend