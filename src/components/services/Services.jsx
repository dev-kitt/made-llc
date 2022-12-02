import React from 'react'
import './services.css'
import { AiFillStar } from 'react-icons/ai'
import { GiHealthNormal } from 'react-icons/gi'
import { MdHealthAndSafety } from 'react-icons/md'
import pros from '../../assets/service-icon.png'

const Service = () => {
  return (
    <section id='services'>
      <div className="service__pros">
        <div className='service__pros-image'>
            <img src={pros} alt="mint-nft" />
        </div>
      </div>
      
      <h5>[ core ]</h5>
      <h2>Compentencies</h2>
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
              <p>TestComplete</p>
            </li>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>ReadyAPI/SoapUI/Postman</p>
            </li>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>WebDriverIO</p>
            </li>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>SSMS/MongoDB</p>
            </li>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>Azure DevOps/Jira</p>
            </li>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>GitHub/Git</p>
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
              <p>JavaScript</p>
            </li>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>HTML/CSS</p>
            </li>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>SQL/NoSQL</p>
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
              <p>ISTQB/QA</p>
            </li>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>CI/CD</p>
            </li>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>TDD/BDD/OOP</p>
            </li>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>HA/DR</p>
            </li>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>SaaS/IaaS</p>
            </li>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>Agile/Scrum</p>
            </li>
          </ul>
        </article>
        {/* END OF Automation */}
      </div>
    </section>
  )
}

export default Service