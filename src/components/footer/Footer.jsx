import React from 'react'
import './footer.css'
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Adindu Okoro</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/adindu-okoro/"
            className="footer__social-link"
            target="_blank"
          >
            <Icon icon="uil:linkedin" />
          </a>

          <a
            href="https://github.com/adinduokoro"
            className="footer__social-link"
            target="_blank"
          >
            <Icon icon="uil:github" />
          </a>

        </div>

        <span className="footer__copy">
          &#169; Created by Adindu Okoro. All rights reserved
        </span>
        
      </div>
    </footer>
  )
}

export default Footer