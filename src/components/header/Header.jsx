import React from "react"
import { Flex, Image, Text } from '@chakra-ui/react'
import banner from '../../assets/kitt.gif'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="mint">
      <div className="container header__container"> 
        <HeaderSocials />
        <Flex justify="center" align="center">
          <Text>DevOps | Test Automation | Game Engineering | Future Tech</Text>
        </Flex>
        <Flex justify="center" align="center" paddingTop={8}>
          <Text>🐿️🦫🐰🐈🦊🦦🦝🦨</Text>
        </Flex>
        <Flex justify="center" align="center" className="header__banner">
          <Image src={banner} alt="made-by-kitt"/>
        </Flex>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
