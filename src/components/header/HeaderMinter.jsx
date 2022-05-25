import { useState } from 'react'
import './headerMint.css'
import { ethers, BigNumber } from 'ethers'
import { Button, Flex, Input, Text } from '@chakra-ui/react'
import standardMadeNFT from '../../STANDARDmadeNFT.json'

const standardMadeNFTAddress = '0xf063FB4Bc2642C77F938B1dc76483D5bf8714512'

const HeaderMinter = ({ accounts, setAccounts }) => {
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
    <div className="mint">
       {isConnected ? (
          <div>
              <Flex align="center" justify="center">
                  <Button 
                      className="btn btn-primary"
                      borderRadius="8px"
                      cursor="pointer"
                      fontFamily="inherit"
                      fontWeight="800"
                      padding="15px"
                      marginTop="5px"
                      marginRight="8px"
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
                      paddingLeft="18px"
                      marginTop="10px"
                      type="number"
                      borderColor="var(--color-lurp)"
                      value={mintAmount} 
                  />
                  <Button 
                      className="btn btn-primary"
                      borderRadius="8px"
                      cursor="pointer"
                      fontFamily="inherit"
                      fontWeight="800"
                      padding="15px"
                      marginTop="10px"
                      marginLeft="8px"
                      onClick={handleIncrement}
                  >
                      +
                  </Button>
              </Flex>
              <Flex align="center" justify="center">
                  <Button 
                      className="btn btn-primary"
                      borderRadius="8px"
                      cursor="pointer"
                      fontFamily="inherit"
                      fontWeight="800"
                      padding="15px"
                      marginTop="10px"
                      onClick={handleMint}
                  >
                      Mint Now
                  </Button>
              </Flex>
              <Text
                  textAlign="center"
                  fontSize="18px"
                  letterSpacing="-5.5%"
                  marginTop="2rem"
                  textShadow="0 2px 2px #000000"
                  color="var(--color-neon)"
              >
                  Connected - Happy Minting!!
              </Text>
          </div>
      ) : (
          <div>
              <Flex align="center" justify="center">
                  <Button
                      className="btn btn-primary"
                      borderRadius="8px"
                      cursor="pointer"
                      fontFamily="inherit"
                      padding="15px"
                      marginBottom="25px"
                      onClick={connectAccount}
                  >
                      Connect  Wallet
                  </Button>
              </Flex>
              <Text
                  textAlign="center"
                  fontSize="18px"
                  padding="10px"
                  fontFamily="inherit"
                  textShadow="0 2px 2px #000000"
                  color="var(--color-neon)"
              >
                  You must be connected to Mint.
              </Text>
          </div>
      )}
    </div>
  )
}

export default HeaderMinter