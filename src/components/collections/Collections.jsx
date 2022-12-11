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
    title: 'WEBSITE-SELECTOR.bat',
    openSee: '../../bat/WEBSITE-SELECTOR.bat',
    more: 'https://github.com/standard-made/devops/blob/main/qa-engineering/batch/HUDSON_WEBSITE_SELECTOR.bat'
  },
  {
    id: 2,
    image: IMG2,
    title: 'MR-ROBOT-PC-CLEAN.bat',
    openSee: '../../bat/MR-ROBOT-PC-CLEAN.bat',
    more: 'https://github.com/standard-made/devops/blob/main/qa-engineering/batch/MR.ROBOT%20PC-CLEAN.bat'
  },
  {
    id: 3,
    image: IMG3,
    title: 'PASSWORD-GENERATOR.bat',
    openSee: '../../bat/PASSWORD-GENERATOR.bat',
    more: 'https://github.com/standard-made/devops/blob/main/qa-engineering/batch/PASSWORD%20GENERATOR.bat'
  },
  {
    id: 4,
    image: IMG4,
    title: 'TIC-TAC-TOE.bat',
    openSee: '../../bat/TIC-TAC-TOE.bat',
    more: 'https://github.com/standard-made/devops/blob/main/qa-engineering/batch/TIC-TAC-TOE.bat'
  },
  {
    id: 5,
    image: IMG5,
    title: 'POKEMON.bat',
    openSee: '../../bat/POKEMON.bat',
    more: 'https://github.com/standard-made/devops/blob/main/qa-engineering/batch/POKEMON.bat'
  },
  {
    id: 6,
    image: IMG6,
    title: 'GUESSING-GAME.bat',
    openSee: '../../bat/GUESSING-GAME.bat',
    more: 'https://github.com/standard-made/devops/blob/main/qa-engineering/batch/GUESSING%20GAME.bat'
  }
]

const Collections = () => {
  return (
    <section id='collections'>
      <h5>[ extra ]</h5>
      <h2>Collections</h2>
      <br></br>
      <br></br>

      <div className="container collections__container">
        {
          data.map(({id, image, title, openSee, more}) => {
            return (
              <article key={id} className='collections__item'>
              <div className='collections__item-image'>
                <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="collections__item-cta">
                <a href={image} className='btn btn-primary' download>Download</a>
                <a href={more} className='btn' rel="noreferrer" target='_blank'>See My Code</a>
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