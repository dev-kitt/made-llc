import React from "react"
import { Flex, Image, Text } from '@chakra-ui/react'
import Logo from '../../assets/standardmade.png'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="mint">
      <div className="container header__container">
        <Flex justify="center" align="center">
          <Image src={Logo} alt="standard-made" maxWidth="520px"/>
        </Flex>
        <Flex justify="center" align="center">
          <Text>DevOps Engineering | Test Automation | Quality Assurance</Text>
        </Flex>
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
