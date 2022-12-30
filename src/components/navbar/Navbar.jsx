import React from "react"
import Toggle from "../toggle/Toggle"
import "./navbar.css"
import Made from "../../favicon.ico"
import Kitt from "../../assets/kitt.png"
import { Image } from '@chakra-ui/react'

const navbar = () => {
    return (
        <div className="n-wrapper" id="home">
            {/* left */}
            <div id="top" className="n-left">
                <Image src={Made} width="45px" height="45px" />
                <h1 className="n-name">STANDARDmade</h1>
                <Toggle />
            </div>
            {/* right */}
            <div className="n-right">
                <Image src={Kitt} width="65px" height="45px" />
            </div>
        </div>
    )
}

export default navbar