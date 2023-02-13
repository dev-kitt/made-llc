import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {FaRegAddressBook} from 'react-icons/fa'
import {BsUiChecksGrid, BsUiChecks} from 'react-icons/bs'
import {RiTeamFill} from 'react-icons/ri'
import {TbMessageShare} from 'react-icons/tb'
import { useState } from "react"

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (                
      <nav>
        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><BiHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegAddressBook/></a>
        <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><BsUiChecksGrid/></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><BsUiChecks/></a>
        <a href="#team" onClick={() => setActiveNav('#team')} className={activeNav === '#team' ? 'active' : ''}><RiTeamFill/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessageShare/></a>
      </nav>
  )
}

export default Nav
