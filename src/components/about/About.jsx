import React from 'react'
import './about.css'
import kittMADE from '../../assets/kitt-made.png'
import {MdDeveloperMode} from 'react-icons/md'
import {FaRobot} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'
import {HiDocumentReport} from 'react-icons/hi'
import {BsStack} from 'react-icons/bs'
import {TbExchange} from 'react-icons/tb'

const About = () => {
  return (
    <section id='about'>
      <h2>Made, LLC</h2>
      <h5>[ Hello World ]</h5>
      <br></br>
      <br></br>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={kittMADE} alt="About" /> 
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsStack className='about__icon'/>
              <h5>ARCHITECTURE</h5>
              <small>Keep IT Tethered</small>
            </article>

            <article className='about__card'>
              <MdDeveloperMode className='about__icon'/>
              <h5>DEVELOPMENT</h5>
              <small>Keep IT Threaded</small>
            </article>

            <article className='about__card'>
              <FaRobot className='about__icon'/>
              <h5>AUTOMATION</h5>
              <small>Keep IT Tested</small>
            </article>

            <article className='about__card'>
              <RiLockPasswordFill className='about__icon'/>
              <h5>SECURITY</h5>
              <small>Keep IT Tokenized</small>
            </article>

            <article className='about__card'>
              <TbExchange className='about__icon'/>
              <h5>INTEGRATION</h5>
              <small>Keep IT Transformed</small>
            </article>

            <article className='about__card'>
              <HiDocumentReport className='about__icon'/>
              <h5>REPORTING</h5>
              <small>Keep IT Transparent</small>
            </article>

            <article className='about__cardx'>

            </article>
          </div>

          <p>
          We are a collection of daytime professionals, moonlighting the world of Internet Technology to build cool and useful things with computers. As curious nighttime creatures we most commonly identify as "Kits", known in the animal kingdom as young or undersized fur-bearing animals 
          such as squirrels, beavers, rabbits, foxes, or rabbits. We thrive in challenging environments, strive to exceeded expectations, and defy conventions while operating in new, advanced, and emerging technologies.  
          <br></br>
          <br></br>
          Our "Kitt's" come in many forms, specializing in software development, test automation, data analytics, APIs, cloud architecture, AR/VR & computer vision, advanced AI, gaming platforms, models, languages and tooling. Simply put - we Keep IT Thriving. 
          Through the course of our long and weathered journeys, we have learned just how unconventionally valuable our paths have been and, when merged, allow us to create uniquely thoughtful products. 
          <br></br>
          <br></br>
          By day, you can find most of us building the front-to-backend systems that power industries and enterprise companies around the country. At night, we emerge from our corporate dens to play, to learn, to create, and to ironically traverse the infinite rabbit holes of technology. 
          As pathfinders, and diggers, we journey through unchareted territories to discovery new worlds of possibilities to unlock our human potential. 
          <br></br>
          <br></br>
          We may not have the fancy degrees, the investors, the corporate lawyers, or even an HR department ... but we most certainly have one thing to our advantage - we don't know any better.   
          <br></br>
          <br></br>
          <small>
          ** Made, LLC is currently operating as a stealth startup - meaning the visibility of our products and services is limited within the scope of Pre-Alpha development.
          </small>
          </p>

          <a href='../../assets/kitt-cover.docx' className='btn btn-primary' download>Learn More</a>
        </div>
      </div>
    </section>
  )
}

export default About