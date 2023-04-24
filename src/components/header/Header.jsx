import React, { useState } from 'react'
import "./header.css"
import { Icon } from '@iconify/react';
import { navs } from './data';

const Header = () => {
  const [toggle, setToggle] = useState(false) 

  // Handles menu you close
  const closeMenu = () => {
    setToggle(false)
  }
  

  return (
    <header className="header">
      <nav className="nav container">

        {/* Site logo */}
        <a href="index.html" className="nav__logo">ADI</a>

        {/* Nav menu & mobile menu */}
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className='nav__list grid'>
            {navs.map((nav, index) => {
              return(
                <li className="nav__item" key={index}>
                  <a href={nav.path} className="nav__link active-link" onClick={closeMenu}>
                    <Icon icon={nav.icon} className='nav__icon'/>
                    {nav.text}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Nav controls */}
          <Icon icon="uil:times" className='nav__close' onClick={() => setToggle(!toggle)}/>
        </div>
        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <Icon icon="uil:apps" />
        </div>

      </nav>
    </header>
  )
}

export default Header

