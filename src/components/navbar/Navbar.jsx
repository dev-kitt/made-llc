import React from "react"
import Toggle from "../toggle/Toggle"
import { Box, Button } from '@chakra-ui/react'
import "./navbar.css"

const navbar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0])

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts)
        }
    }

    return (
        <div className="n-wrapper" id="home">
            {/* left */}
            <div id="top" className="n-left">
                <h1 className="n-name">STANDARDmade</h1>
                <Toggle />
            </div>
            {/* right */}
            <div className="n-right">
                {/* Connect */}
                {isConnected ? (
                    <Box margin="0 15px">Connected</Box>
                ) : (
                    <Button 
                        className="btn btn-primary"
                        onClick={connectAccount}>Connect</Button>
                )}
            </div>
        </div>
    )
}

export default navbar