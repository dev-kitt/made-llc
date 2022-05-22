import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {SiDiscord} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com"><AiFillLinkedin /></a>
        <a href="https://github.com"><AiFillGithub /></a>
        <a href="https://twitter.com"><AiOutlineTwitter /></a>
        <a href="https://discord.com"><SiDiscord /></a>
    </div>
  )
}

export default HeaderSocials