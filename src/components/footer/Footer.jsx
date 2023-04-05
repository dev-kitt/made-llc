import React from 'react'
import './footer.css'
import pros from '../../assets/made_squirrel.png'
import { Flex, Image} from '@chakra-ui/react'

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <Flex justify="space-around" width="100%" padding="5px">
              <Image src={pros} boxSize="8%" margin="5px" />
        </Flex>
        <div className="footer__copyright">
          <small>&copy; Kitt, LLC [2019-2023]</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer