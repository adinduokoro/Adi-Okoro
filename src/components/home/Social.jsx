import React from 'react'
import { Icon } from '@iconify/react';

const Social = () => {
  return (
    <div className="home__social">

      {/* <a href="" className="home__social-icon" target='_blank'>
        <Icon icon="mdi:instagram" />
      </a> */}

      <a href="" className="home__social-icon" target='_blank'>
        <Icon icon="mdi:linkedin" />
      </a>

      <a href="" className="home__social-icon" target='_blank'>
        <Icon icon="mdi:github" />
      </a>

    </div>
  )
}

export default Social