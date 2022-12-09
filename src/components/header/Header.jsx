import React, { useState } from "react"
import './header.css'
import HeaderMinter from './HeaderMinter'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  const [accounts, setAccounts] = useState([])

  return (
    <header id="mint">
      <div className="container header__container">    
        <h5 className="text-light">Extraordinary Automation Engineering</h5> 
        <h1>STANDARDmade</h1>
        <h5 className="text-light">
          by Kitt
        </h5>
        <HeaderMinter accounts={accounts} setAccounts={setAccounts} />
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
