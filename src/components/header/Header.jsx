import React from 'react'
import "./header.css"
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Adindu</a>

        <div className="nav__menu">
          <ul className='nav__list grid'>

            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <Icon icon="uil:estate" className='nav__icon'/>
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <Icon icon="mdi:user-outline" className='nav__icon'/>
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <Icon icon="uil:file-alt" className='nav__icon'/>
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <Icon icon="mdi:briefcase-outline" className='nav__icon'/>
                Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <Icon icon="uil:scenery" className='nav__icon'/>
                Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
              <Icon icon="uil:message" className='nav__icon'/>
                Contact
              </a>
            </li>
          </ul>

          <Icon icon="uil:times" className='nav__close'/>
        </div>

        <div className="nav__toggle">
          <Icon icon="uil:apps" />
        </div>
      </nav>
    </header>
  )
}

export default Header

