import React from "react"
import { Flex, Image} from '@chakra-ui/react'
import Logo from '../../assets/standardmade.png'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="mint">
      <div className="container header__container">           
        <Flex justify="space-around" width="100%" padding="0 75px">
          <Image src={Logo} boxSize="50%" margin="0 15px" />
        </Flex>
        <h5 className="text-light">DevOps Engineering | Test Automation | Quality Assurance</h5>
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
