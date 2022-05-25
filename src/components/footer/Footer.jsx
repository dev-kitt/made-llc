import React from 'react'
import './footer.css'
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <a href="#home" className='footer__logo'>STANDARDmade</a>

        <ul className="permalinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experiences">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://twitter.com" rel="noreferrer" target="_blank"><AiOutlineTwitter /></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; STANDARDmade, LLC [2019-2023]</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer