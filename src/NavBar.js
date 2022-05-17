import React from 'react';
//import { ethers } from 'ethers';
//import detectEthereumProvider from '@metamask/detect-provider';
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import OpenSea from "./assets/social-media-icons/opensea_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";

const NavBar = ({ accounts, setAccounts }) => {

    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <Flex justify="space-between" align="center" padding="30px">
            {/* Left Side - Social Media Icons */}
            <Flex justify="space-around" width="40%" padding="0 75px">
                <Link href="https://opensea.io/STANDARDmade">
                    <Image src={OpenSea} boxSize="42px" margin="0 15px" />
                </Link>
                <Link href="https://twitter.com/standard_made">
                    <Image src={Twitter} boxSize="42px" margin="0 15px" />
                </Link>
                <Link href="https://mail.google.com/">
                    <Image src={Email} boxSize="42px" margin="0 15px" />
                </Link>
                    
            </Flex>

            {/* Right Side - Menu */}
            <Flex 
             justify="space-around"
             align="center"
             width="40%"
             padding="30px"
            >
                <Box margin="0 15px">About</Box>
                <Spacer />
                <Box margin="0 15px">Mint</Box>
                <Spacer />
                <Box margin="0 15px">Team</Box>
                <Spacer />

            {/* Connect */}
            {isConnected ? (
                <Box margin="0 15px">Connected</Box>
            ) : (
                <Button 
                    backgroundColor="#D6517D"
                    borderRadius="15px"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    color="white"
                    cursor="pointer"
                    fontFamily="inherit"
                    padding="15px"
                    margin="0 15px"
                    onClick={connectAccount}>Connect</Button>
            )}
            </Flex>            
        </Flex>
    );
};

export default NavBar;