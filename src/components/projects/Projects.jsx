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
    image: IMG2,
    title: 'Web3 Solidity Test App',
    openSee: 'https://kitt.one',
    more: 'https://github.com/standard-made/kitt-one'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Find Bacon Selenium Automation',
    openSee: 'https://github.com/standard-made/devops/blob/main/qa-engineering/selenium/imperfect/RUN_ME-imperfect-foods.bat',
    more: 'https://github.com/standard-made/selenium'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Harvard/MIT CS50 Scratch Project',
    openSee: 'https://scratch.mit.edu/projects/385458190/editor/',
    more: 'https://scratch.mit.edu/projects/385458190/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'TIC-TAC-TOE.bat',
    openSee: '../../assets/TIC-TAC-TOE.bat',
    more: 'https://github.com/standard-made/devops/blob/main/qa-engineering/batch/TIC-TAC-TOE.bat'
  },
  {
    id: 5,
    image: IMG5,
    title: 'GUESSING-GAME.bat',
    openSee: '../../assets/GUESSING-GAME.bat',
    more: 'https://github.com/standard-made/devops/blob/main/qa-engineering/batch/GUESSING%20GAME.bat'
  },
  {
    id: 6,
    image: IMG6,
    title: 'WEBSITE-SELECTOR.bat',
    openSee: '../../assets/WEBSITE-SELECTOR.bat',
    more: 'https://github.com/standard-made/devops/blob/main/qa-engineering/batch/WEBSITE_SELECTOR.bat'
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
          data.map(({id, image, title, more, openSee}) => {
            return (
              <article key={id} className='projects__item'>
              <div className='projects__item-image'>
                <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="projects__item-cta">
                <a href={openSee} className='btn btn-primary' rel="noreferrer" target='_blank'>Try It Out</a>
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