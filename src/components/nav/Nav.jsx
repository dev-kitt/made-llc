import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookmarkAlt} from 'react-icons/bi'
import {MdDesignServices} from 'react-icons/md'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {GiTacos} from 'react-icons/gi'
import { useState } from "react"

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (                
      <nav>
        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><BiHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdDesignServices/></a>
        <a href="#tacos" onClick={() => setActiveNav('#tacos')} className={activeNav === '#tacos' ? 'active' : ''}><GiTacos/></a>
        <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><BiBookmarkAlt/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
      </nav>
  )
}

export default Nav
