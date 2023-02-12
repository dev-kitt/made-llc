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
            <h3>Stack</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>TestComplete/Selenium/Cypress</p>
            </li>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>ReadyAPI/SoapUI/Postman</p>
            </li>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>WebDriverIO/Cucumber/Appium</p>
            </li>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>SSMS/MongoDB/PostgreSQL</p>
            </li>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>Azure/Jira/GCP/K8s</p>
            </li>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>GitHub/Git/Firebase/NPM/Yarn</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Scripting</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>JavaScript/Node/Python/C#</p>
            </li>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>HTML/CSS/Bootstrap</p>
            </li>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>SQL/NoSQL/PSQL</p>
            </li>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>Bash/Shell (CLI)</p>
            </li>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>JSON/XML/YAML</p>
            </li>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>.NET (ASP/VB)</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPER */}

        <article className="service">
          <div className="service__head">
            <h3>Models</h3>
          </div>

          <ul className='service__list'>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>Agile/Scrum/Waterfall</p> 
            </li>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>ISTQB/QA</p>
            </li>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>TDD/BDD/OOP</p>
            </li>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>HA/DR/IaC</p>
            </li>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>AI/AR/VR</p>
            </li>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>CI/CD</p>
            </li>
          </ul>
        </article>
        {/* END OF Automation */}
      </div>
    </section>
  )
}

export default Service