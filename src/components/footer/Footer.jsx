import React from 'react'
import './footer.css'
import pros from '../../assets/service-icon.png'
import { Flex, Image} from '@chakra-ui/react'

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <Flex justify="space-around" width="100%" padding="5px">
              <Image src={pros} boxSize="25%" margin="5px" />
        </Flex>
        <h1 className='footer__logo'>Made</h1>
        <h5>by kitt</h5>
        <div className="footer__copyright">
          <small>&copy; Made, LLC [2019-2023]</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer