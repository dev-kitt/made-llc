import React from 'react'
import './about.css'
import kittMADE from '../../assets/kitt-made.png'
import {BsFillAwardFill} from 'react-icons/bs'
import {MdDeveloperMode} from 'react-icons/md'
import {FaRobot} from 'react-icons/fa'
import banner from '../../assets/about-standardmade-nft.gif'

const About = () => {
  return (
    <section id='about'>
      <div className='about__banner'>
          <img src={banner} alt="about-nft" />
      </div>

      <h5>[ my cargo ]</h5>
      <h2>About Me</h2>
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
              <h5>EXPERT</h5>
              <small>Automation Engineering</small>
            </article>

            <article className='about__card'>
              <MdDeveloperMode className='about__icon'/>
              <h5>TESTING</h5>
              <small>Full Stack E2E</small>
            </article>

            <article className='about__card'>
              <FaRobot className='about__icon'/>
              <h5>KITT:</h5>
              <small>Keep IT Testing</small>
            </article>

            <article className='about__cardx'>

            </article>
          </div>

          <p>
          Hey I'm Keith, but here you can call me Kitt - Keith Is Testing Things, also I Keep IT Testing, or Keith Is Tasting Tacos, but mainly because of <a href="https://youtu.be/7qQ2dvSvT_M" >this</a>.  
          As a former Army Parachute Rigger, having been selected for the Airborne Special Operations Parachute Test Facility, and as a current Test Automation Engineer and Quality Assurance Expert 
          working in cutting edge technologies, I have spent the last 13 years specializing in the art of testing.
          <br></br>
          <br></br>
          In a previous life I was even an aspiring stand-up comedian (<a href="https://youtu.be/cex2SMMODbQ" >proof</a>) ... although judging by this website I may think I still am. Although I have taken a different path than most, 
          one far less traveled, what I have come to realize over the course of my long and weathered journey, is just how uniquely and unconventionally valuable my journey has been. 
          <br></br>
          <br></br>
          Currently I spend my days automating front-end, back-end, and API tests for one of crypto's largest fintech platforms. By night, I'm brushing up on new technologies in Machine Learning, AI, AR/VR, and Computer Vision; using Python, Flutter/Dart, 
          Node/React, Angular - and of course, testing with Cypress, WebDriver, Python3, and AndroidStudio. Also I feed my kids and wife in between. 
          <br></br>
          <br></br>
          Outside of moonlighting as a Developer, Designer and Dad ... I can also say I have skydived with the Golden Knights, driven a submarine, am a 2x 2022 Smartbear Quarterly Community Leader, 2022 Smartbear Community Hero Nominee (TBA), 2018 Google Nesties Award Winner 😉, 
          Auburn University Football walk-on (and off), HS Wrestling All-American - 2x State Champion and 1x Runner-Up, 2x HS Football State Champion, and 1996 Harriet the Spy Nickelodeon Contest Runner-Up. OK that last one is a reach, but this is my website so I can brag on myself how I want.
          <br></br>
          <br></br>
          <small>**This is my personal portfolio website, developed by me, under my company Made, LLC. Please do not and use any of this content or my personal information maliciously. There is a reason my face is covered by a unicorn head and why I don't have any social media accounts,
            and I sure as heck don't own one of those Roomba vacuums - they're just expensive and we bought Omaha Steak instead.  All's I'm sayin' is, we are all living on a rock flying through space doing the best we can with what we have - Don't be an @$$!
          </small>   
          </p>

          <a href='../../assets/kitt-cover.docx' className='btn btn-primary' download>Learn More</a>
        </div>
      </div>
    </section>
  )
}

export default About