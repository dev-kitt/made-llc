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
          Kitt was born at an early age. Scientists speculate this phenomenon took place sometime during the mid 1980s. He began working at a sheet metal factory around the age of nine, 
          and within about a week he was running the floor as the shop supervisor. Kitt was then offered a position at the local tannery working with leather, which was always a dream of his. 
          <br></br>
          <br></br>
          Besides being an avid hunter, fisherman and metallurgist, Kitt has a special affinity for breakfast foods and meats of all kinds while disdaining non-manly dishes like salads. 
          In high school Kitt's alter ego Chet Muston, a somewhat well-known jazz musician, released three contemporary albums including his iTunes Top 100 hit "Pardon My French...Horn".  
          <br></br>
          <br></br>
          Although his college years were mostly a blur, Kitt managed to land himself one sweet babe. A woman so fine only the tantalizing romantics of a truly great seduction artist could swoon her. 
          They would later marry. Eventually Kitt's unwavering strength and heroics pulled him out of college where he was called upon by a few high-powered U.S. and foreign dignitaries to protect America 
          from terriorists and other radical militants. 
          <br></br>
          <br></br>
          Having spent four years in the Army saving lives and jumping out of planes; his time in service gave rise to several best-selling books and hit television shows, which were loosely based on his life. 
          Despite having worked for the government, Kitt has a surprisingly strong work ethic. In 6 hours, he managed to construct a full-size replica of the Statue of Liberty out of Nutella.
          <br></br>
          <br></br>
          <small>**In all seriousness, I'm seriously not being serious. If you're seriously interested in my work, or just want to say you hired a unicorn, 
          I'm actually a seriously hard worker with a professionally serious resume.
          </small>   
          </p>

          <a href='../../assets/kitt-resume.pdf' className='btn btn-primary' download>Learn More</a>
        </div>
      </div>
    </section>
  )
}

export default About