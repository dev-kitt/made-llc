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
      
      <h5>[ inspired by ]</h5>
      <h2>Service Professionals</h2>
      <br></br>
      <br></br>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Healthcare</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>Doctors</p>
            </li>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>Nurses</p>
            </li>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>Technicians</p>
            </li>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>Veterinarians</p>
            </li>
            <li>
              <GiHealthNormal className='service__list-icon' />
              <p>Biomedical Sciences</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Military & Veterans</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>Air Force</p>
            </li>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>Army</p>
            </li>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>Coast Guard</p>
            </li>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>Marine Corps</p>
            </li>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>Navy</p>
            </li>
            <li>
              <AiFillStar className='service__list-icon' />
              <p>Space Force</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPER */}

        <article className="service">
          <div className="service__head">
            <h3>First Responders</h3>
          </div>

          <ul className='service__list'>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>Fire Fighters</p>
            </li>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>Paramedics</p>
            </li>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>Law Enforcement</p>
            </li>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>Disaster Relief</p>
            </li>
            <li>
              <MdHealthAndSafety className='service__list-icon' />
              <p>Humanitarian Aid</p>
            </li>
          </ul>
        </article>
        {/* END OF Automation */}
      </div>
    </section>
  )
}

export default Service