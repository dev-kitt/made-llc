import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {GiTacos} from 'react-icons/gi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/standard-made/devops" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/qakit/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
        <a href="https://www.tacoipsum.com/" target="_blank" rel="noopener noreferrer"><GiTacos /></a>
    </div>
  )
}

export default HeaderSocials