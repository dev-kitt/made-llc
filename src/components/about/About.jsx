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
      <h2>Keith "Kitt" Hudson</h2>
      <h5>[ About Me ]</h5>
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
          As a current Lead Software QA Engineer, Test Automation expert, and former Army Parachute Rigger at the Airborne Special Operations Parachute Test Facility, I have spent the past 13 years specializing in the art of Quality Assurance. During my time in this field, 
          I have developed a strong understanding of development and test methodologies and have become proficient in a variety of open-source and Enterprise automation tools, frameworks, and methodologies.  
          <br></br>
          <br></br>
          I am highly organized and detail-oriented, and I have a proven track record of successfully designing, developing and executing test plans within CI/CD workflows and in various testing arenas - Desktop, Web, Mobile, API, Database, Performance, and Hardware/Firmware. 
          Primarily automating in JavaScript/SQL for the past 7 years, I also have experience using Java, Python, C#, VB, Groovy, Bash, PowerShell, Gherkin, NoSQL, HTML/CSS, XML/JSON/YAML and TypeScript - adapting to the tooling and language preferences of the project as needed. 
          <br></br>
          <br></br>
          Although I have taken a different path than most, one far less traveled, I have found the culmination of my life's experiences have given me a unique perspective, allowing me to find creative solutions to complex issues. 
          I am excited to bring my skills and experience to your team and am confident that I can make a positive contribution. I look forward to discussing my qualifications in more detail and appreciate your time.   
          <br></br>
          <br></br>
          <small>
          ** Kitt, LLC is currently serving as a personal website, CV, and holding company for all design and development assets. All content is privately owned, protected, and may not be used without explicit consent.
          </small>
          </p>

          <a href='../../assets/kitt-resume.pdf' className='btn btn-primary' >Learn More</a>
        </div>
      </div>
    </section>
  )
}

export default About