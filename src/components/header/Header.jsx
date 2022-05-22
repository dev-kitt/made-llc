import React from "react"
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {

  return (
    <header id="home">
      <div className="container header__container">    
        <h5 className="text-light">NFTs</h5> 
        <h1>STANDARDmade</h1>
        <h5 className="text-light">
          Extraordinary digital collectables inspired by uniformed professionals.
          <br></br>
          Now on OpenSea [ETH @ 0.0420 | MATIC @ 420]
        </h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
