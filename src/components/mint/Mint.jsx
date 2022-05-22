import { useState } from 'react'
import './mint.css'
import { ethers, BigNumber } from 'ethers'
import { Button, Flex, Input, Text, Image } from '@chakra-ui/react'
import standardMadeNFT from '../../STANDARDmadeNFT.json'
import mint from '../../assets/mint.png'

const standardMadeNFTAddress = '0xf063FB4Bc2642C77F938B1dc76483D5bf8714512'

const Mint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1)
    const isConnected = Boolean(accounts[0])

    async function handleMint() {
        if (window.etherum) {
            const provider = new ethers.providers.Web3Provider(window.etherum)
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                standardMadeNFTAddress,
                standardMadeNFT.abi,
                signer
            )
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.042 * mintAmount).toString()),
                })
                console.log('response: ', response)
            } catch (err) {
                console.log('error: ', err)
            }
        }
    }

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            })
            setAccounts(accounts)
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return
        setMintAmount(mintAmount - 1)
    }

    const handleIncrement = () => {
        if (mintAmount >= 3) return
        setMintAmount(mintAmount + 1)
    }

    return (
        <section id='mint'>
            <div className="container mint__container">
                    <div>
                        <Image src={mint} alt="mint-nft" />
                    </div>

                    {isConnected ? (
                    <div>
                        <Text
                            textAlign="center"
                            marginTop="70px"
                            fontSize="38px"
                            letterSpacing="-5.5%"
                            fontFamily="'Odibee Sans', cursive"
                            textShadow="0 2px 2px #000000"
                            color="#D6517D"
                        >
                            Connected - Happy Minting!!
                        </Text>
                        <Flex align="center" justify="center">
                            <Button 
                                className="btn btn-primary"
                                borderRadius="8px"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                marginTop="5px"
                                onClick={handleDecrement}
                            >
                                -
                            </Button>
                            <Input 
                                readOnly
                                fontFamily="inherit"
                                width="100px"
                                height="40px"
                                textAlign="center"
                                paddingLeft="19px"
                                marginTop="10px"
                                type="number"
                                value={mintAmount} 
                            />
                            <Button 
                                className="btn btn-primary"
                                borderRadius="8px"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                marginTop="10px"
                                onClick={handleIncrement}
                            >
                                +
                            </Button>
                        </Flex>
                        <Flex align="center" justify="center">
                            <Button 
                                className="btn btn-primary"
                                backgroundColor="#D6517D"
                                borderRadius="8px"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                marginTop="10px"
                                onClick={handleMint}
                            >
                                Mint Now
                            </Button>
                        </Flex>
                    </div>
                ) : (
                    <div>
                        <Text
                            textAlign="center"
                            marginTop="70px"
                            fontSize="38px"
                            padding="10px"
                            fontFamily="'Odibee Sans', cursive"
                            textShadow="0 2px 2px #000000"
                            color="#D6517D"
                        >
                            You must be connected to Mint.
                        </Text>
                        <Flex align="center" justify="center">
                            <Button
                                className="btn btn-primary" 
                                fontFamily="'Odibee Sans', cursive"
                                borderRadius="15px"
                                boxShadow="0px 2px 2px 1px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                textAlign="center"
                                padding="18px"
                                margin="0"
                                fontSize="28px"
                                onClick={connectAccount}
                            >
                                Connect
                            </Button>
                        </Flex>
                    </div>
                    )}
            </div>
        </section>
    )
}

export default Mint