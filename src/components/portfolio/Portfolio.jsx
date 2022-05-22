import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE IMAGES IN PROD
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Title 1',
    gitHub: 'https://github.com',
    demo: 'https://made.llc'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Title 2',
    gitHub: 'https://github.com',
    demo: 'https://made.llc'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Title 3',
    gitHub: 'https://github.com',
    demo: 'https://made.llc'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Title 4',
    gitHub: 'https://github.com',
    demo: 'https://made.llc'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Title 5',
    gitHub: 'https://github.com',
    demo: 'https://made.llc'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Title 6',
    gitHub: 'https://github.com',
    demo: 'https://made.llc'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>See the</h5>
      <h2>Collection</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, gitHub, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={gitHub} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio