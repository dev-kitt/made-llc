import React from 'react'
import './about.css'
import kittMADE from '../../assets/kitt-made.png'
import {BsFillAwardFill} from 'react-icons/bs'
import {MdDeveloperMode} from 'react-icons/md'
import {FaRobot} from 'react-icons/fa'

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
              <BsFillAwardFill className='about__icon'/>
              <h5>ARCHITECTURE</h5>
              <small>Scalable Frameworks</small>
            </article>

            <article className='about__card'>
              <MdDeveloperMode className='about__icon'/>
              <h5>DEVELOPMENT</h5>
              <small>Full Stack E2E</small>
            </article>

            <article className='about__card'>
              <FaRobot className='about__icon'/>
              <h5>AUTOMATION</h5>
              <small>Keep IT Testing</small>
            </article>

            <article className='about__cardx'>

            </article>
          </div>

          <p>
          We are a consortium of IT professional moonlighting developers who enjoy making cool things with computers. As curious nighttime creatures we most commonly identify as "Kits", known in the animal kingdom as young or undersized fur-bearing animals 
          such as squirrels, beavers, rabbits, foxes, or rabbits. We thrive in challenging environments, strive to exceeded expectations, and defy conventions while operating in new, advanced, and emerging technologies.  
          <br></br>
          <br></br>
          Our "Kitt's" come in many forms, specializing in software development, test automation, data analytics, APIs, cloud architecture, computer vision, advanced AI/AR/VR/Gaming platforms, models, languages and tools. Simply put - we Keep IT Technical, we Keep IT Testing,
          and we mostly certainly Keep IT Thriving. Through the course of our long and weathered journeys, we have learned just how uniquely and unconventionally valuable our paths have been. 
          <br></br>
          <br></br>
          By day, you can find most of us building the technologies and tools that power industries and enterprise companies across the globe. At night, we emerge from our corporate dens to play, to learn, to create, and to ironically traverse the infinite rabbit holes of technology.
          We may not have the fancy degrees, the investors, the corporate lawyers, the quantum computers, lab equipment, goverment grants or even an HR department ... but we most certainly have the one thing which separates us from the rest of the fur-bearing animals in the world - we don't know any better.   
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