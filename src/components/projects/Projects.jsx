import React from 'react'
import './projects.css'
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
    title: 'Web3',
    openSee: '../../assets/nft001.png',
    more: 'https://kitt.one'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Selenium',
    openSee: '../../assets/nft002.png',
    more: 'https://github.com/standard-made/selenium'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Scratch',
    openSee: '../../assets/nft003.png',
    more: 'https://scratch.mit.edu/projects/385458190/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'TIC-TAC-TOE.bat',
    openSee: '../../assets/nft004.png',
    more: 'https://github.com/standard-made/devops/blob/main/qa-engineering/batch/TIC-TAC-TOE.bat'
  },
  {
    id: 5,
    image: IMG5,
    title: 'POKEMON.bat',
    openSee: '../../assets/nft005.png',
    more: 'https://github.com/standard-made/devops/blob/main/qa-engineering/batch/POKEMON.bat'
  },
  {
    id: 6,
    image: IMG6,
    title: 'MR-ROBOT-PC-CLEAN.bat',
    openSee: '../../assets/nft006.png',
    more: 'https://github.com/standard-made/devops/blob/main/qa-engineering/batch/MR.ROBOT%20PC-CLEAN.bat'
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>[ my stuff ]</h5>
      <h2>Projects</h2>
      <br></br>
      <br></br>

      <div className="container projects__container">
        {
          data.map(({id, image, title, openSee, more}) => {
            return (
              <article key={id} className='projects__item'>
              <div className='projects__item-image'>
                <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="projects__item-cta">
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

export default Projects