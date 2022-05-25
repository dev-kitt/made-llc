import React from 'react'
import './collections.css'
import IMG1 from '../../assets/nft001.png'
import IMG2 from '../../assets/nft002.png'
import IMG3 from '../../assets/nft003.png'
import IMG4 from '../../assets/nft004.png'
import IMG5 from '../../assets/nft005.png'
import IMG6 from '../../assets/nft006.png'
import { motion } from "framer-motion";

// DO NOT USE IMAGES IN PROD
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'made - #001',
    openSea: 'https://opensea.io/STANDARDmade',
    more: 'https://made.llc'
  },
  {
    id: 2,
    image: IMG2,
    title: 'made - #002',
    openSea: 'https://opensea.io/STANDARDmade',
    more: 'https://made.llc'
  },
  {
    id: 3,
    image: IMG3,
    title: 'made - #003',
    openSea: 'https://opensea.io/STANDARDmade',
    more: 'https://made.llc'
  },
  {
    id: 4,
    image: IMG4,
    title: 'made - #004',
    openSea: 'https://opensea.io/STANDARDmade',
    more: 'https://made.llc'
  },
  {
    id: 5,
    image: IMG5,
    title: 'made - #005',
    openSea: 'https://opensea.io/STANDARDmade',
    more: 'https://made.llc'
  },
  {
    id: 6,
    image: IMG6,
    title: 'made - #006',
    openSea: 'https://opensea.io/STANDARDmade',
    more: 'https://made.llc'
  }
]

const Collections = () => {
  return (
    <section id='collections'>
      <h5>[ buy the ]</h5>
      <h2>Collection</h2>
      <br></br>
      <br></br>

      <div className="container collections__container">
        {
          data.map(({id, image, title, openSea, more}) => {
            return (
              <article key={id} className='collections__item'>
              <div className='collections__item-image'>
                <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="collections__item-cta">
                <a href={openSea} className='btn btn-primary'>Shop</a>
                <a href={more} className='btn' rel="noreferrer" target='_blank'>Learn More</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Collections