import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaMicroblog} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/dev-kitt/" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/qakit/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
        <a href="https://community.smartbear.com/t5/user/viewprofilepage/user-id/110153" target="_blank" rel="noopener noreferrer"><FaMicroblog /></a>
    </div>
  )
}

export default HeaderSocials