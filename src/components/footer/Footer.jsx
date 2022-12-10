import React from 'react'
import './footer.css'
//import {FiGithub} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <a href="#home" className='footer__logo'>STANDARDmade</a>
        <div className="footer__copyright">
          <h5>kitt</h5>
          <small>&copy; STANDARDmade, LLC [2019-2023]</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer