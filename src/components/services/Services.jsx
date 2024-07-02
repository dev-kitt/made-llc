import React from 'react'
import './services.css'
import { AiFillStar } from 'react-icons/ai'
import { GiHealthNormal } from 'react-icons/gi'
import { MdHealthAndSafety } from 'react-icons/md'

const Service = () => {
  return (
    <section id='services'>
      <br></br>
      <br></br>     
      <h2>Services</h2>
      <h5>[ And Skills ]</h5>
      <br></br>
      <br></br>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>TS/JS/Java/Python/C#/C++/Dart</p>
            </li>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>HTML/CSS/Bootstrap/Flutter</p>
            </li>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>Windows/Mac/Android/iOS/Linux</p>
            </li>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>SQL/NoSQL/PSQL/OSD/OOD</p>
            </li>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>Kubernetes/Docker/Terraform</p>
            </li>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>Gemini/ChatGPT/Unity/Unreal/DALL-E</p>
            </li>
          </ul>
        </article>
        {/* END OF DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Automation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>TestComplete/Selenium/Cypress/Jest/SpecFlow</p>
            </li>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>ReadyAPI/SoapUI/Postman/Swagger</p>
            </li>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>WebDriverIO/Cucumber/Appium/AndroidStudio</p>
            </li>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>SSMS/MongoDB/PostgreSQL</p>
            </li>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>Azure/GoogleCloud/AWS/Jira/Monday/PowerBI</p>
            </li>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>GitHub/Firebase/Flutterfire/Node</p>
            </li>
          </ul>
        </article>
        {/* END OF AUTOMATION */}

        <article className="service">
          <div className="service__head">
            <h3>Models</h3>
          </div>

          <ul className='service__list'>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>Agile/Scrum/Waterfall/DevOps</p> 
            </li>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>ISTQB/QA/ISO/Accessibility/SEO</p>
            </li>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>TDD/BDD/FDD/OOP/RAD/DSDM</p>
            </li>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>HighAvailability/DisasterRecovery/IaC</p>
            </li>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>CI/CD/SAST/DAST</p>
            </li>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>AI/AR/VR/ComputerVision</p>
            </li>
          </ul>
        </article>
        {/* END OF Automation */}
      </div>
    </section>
  )
}

export default Service