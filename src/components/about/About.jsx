import React from 'react'
import './about.css'
import llamaNFT from '../../assets/llama-nft.png'
import {BsFillAwardFill} from 'react-icons/bs'
import {MdDeveloperMode} from 'react-icons/md'
import {FaRobot} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Our Cargo</h5>
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={llamaNFT} alt="About" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsFillAwardFill className='about__icon'/>
              <h5>STANDARD</h5>
              <small>Uniquely Minted</small>
            </article>

            <article className='about__card'>
              <MdDeveloperMode className='about__icon'/>
              <h5>made</h5>
              <small>Web.3 + Layer.2</small>
            </article>

            <article className='about__card'>
              <FaRobot className='about__icon'/>
              <h5>NFTs</h5>
              <small>Veteran Made</small>
            </article>
          </div>

          <p>
          Every day is taco ipsum tuesday. Shrimp tacos are tasty tacos! It’s long been rumored that the chupacabra is really just a 
          crazed man who’s local taco shop went out of business. Black or pinto beans? I think I’ve overdosed on tacos. If you were a 
          taco, would you eat yourself? I think I’ve overdosed on tacos. How do you feel about hard shelled tacos? Add in a few el Pastor 
          with guac and diced onions. Pico de gallo, on the side please. Flour or corn tortillas? Tacos dorados called flautas, or taquitos, 
          for which the tortillas are filled with pre-cooked shredded chicken, beef or barbacoa, rolled into an elongated cylinder and 
          deep-fried until crisp.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About