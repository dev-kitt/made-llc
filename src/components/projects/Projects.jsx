import React from 'react'
import './projects.css'
import IMG0 from '../../assets/projects/kitt_llc.png'
import IMG1 from '../../assets/projects/kitt_hub.png'
import IMG2 from '../../assets/projects/kitt_one.png'
import IMG3 from '../../assets/projects/kitt_plus.png'
import IMG4 from '../../assets/projects/kitt_pro.png'
import IMG5 from '../../assets/projects/kitt_games.png'
import IMG6 from '../../assets/projects/kitt_tools.png'
import IMG7 from '../../assets/projects/kitt_services.png'
import { motion } from "framer-motion";
           
// DO NOT USE IMAGES IN PROD
const data = [

  {
    id: 0,
    image: IMG0,
    title: '.LLC > Made This App',
    openSee: '',
    more: 'https://github.com/dev-kitt/made-llc'
  },
  {
    id: 1,
    image: IMG1,
    title: '.COM > KittHub GitHub',
    openSee: 'https://kitthub.com',
    more: 'https://github.com/kitt-llc'
  },
  {
    id: 2,
    image: IMG2,
    title: '.ONE > Web3 Solidity Test App',
    openSee: 'https://kitt.one',
    more: 'https://github.com/dev-kitt/kitt-one'
  },
  {
    id: 3,
    image: IMG3,
    title: '.PLUS > ChatGPT + DALL-E Chat App',
    openSee: 'https://kitt.plus',
    more: 'https://github.com/dev-kitt/kitt-plus'
  },
  {
    id: 4,
    image: IMG4,
    title: '.PRO > Personal Productivity App',
    openSee: 'http://kitt.pro/',
    more: 'https://github.com/dev-kitt/kitt-pro'
  },
  {
    id: 5,
    image: IMG5,
    title: '.GAMES > Unity & Unreal Gaming App',
    openSee: 'http://kitt.games/',
    more: 'https://github.com/dev-kitt/kitt-games'
  },
  {
    id: 6,
    image: IMG6,
    title: '.TOOLS > AI Dev Tools [coming soon]',
    openSee: '',
    more: ''
  },
  {
    id: 7,
    image: IMG7,
    title: '.SERVICES > AI Dev Services [coming soon]',
    openSee: '',
    more: ''
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h2>Development</h2>
      <h5>[ Sample Projects ]</h5>
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
                  <a href={more} className='btn' rel="noreferrer" target='_blank'>See The Code</a>
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