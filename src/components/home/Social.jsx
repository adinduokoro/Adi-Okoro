import React from 'react'
import { Icon } from '@iconify/react';
import { socialLinks } from './data';

const Social = () => {
  return (
    <div className="home__social">

      {/* Sidebar social links */}
      {socialLinks.map((item , index) => {
        return(
          <a href={item.path} className="home__social-icon" target='_blank' key={index}>
            <Icon icon={item.icon} />
          </a>
        )
      })}

    </div>
  )
}

export default Social