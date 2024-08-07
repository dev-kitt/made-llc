import React from "react"
import Toggle from "../toggle/Toggle"
import "./navbar.css"
import Made from "../../assets/made_one.png"
import Kitt from "../../assets/kitt_one.png"
import { Image, Link, Text } from '@chakra-ui/react'

const navbar = () => {
    return (
        <div className="n-wrapper" id="home">
            {/* left */}
            <div id="top" className="n-left">
                <Image src={Made} width="100px" height="100px" />
                <Toggle />
            </div>
            {/* right */}
            <div className="n-right">
                <Text padding={8}><p>by</p></Text>
                <Link href="/" rel="noreferrer" target='_blank'>
                    <Image src={Kitt} width="80px" height="80px" />
                </Link>
            </div>
        </div>
    )
}

export default navbar