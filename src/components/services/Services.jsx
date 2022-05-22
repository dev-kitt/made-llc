import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Service = () => {
  return (
    <section id='services'>
      <h5>Inspired by</h5>
      <h2>Service Professionals</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Military & Veterans</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__icon-list' />
              <p>Taco ipsum, beef chicken steak pork tacos erryday.</p>
            </li>
            <li>
              <BiCheck className='service__icon-list' />
              <p>Taco ipsum, beef chicken steak pork tacos erryday.</p>
            </li>
            <li>
              <BiCheck className='service__icon-list' />
              <p>Taco ipsum, beef chicken steak pork tacos erryday.</p>
            </li>
            <li>
              <BiCheck className='service__icon-list' />
              <p>Taco ipsum, beef chicken steak pork tacos erryday.</p>
            </li>
            <li>
              <BiCheck className='service__icon-list' />
              <p>Taco ipsum, beef chicken steak pork tacos erryday.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Healthcare</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__icon-list' />
              <p>Taco ipsum, beef chicken steak pork tacos erryday.</p>
            </li>
            <li>
              <BiCheck className='service__icon-list' />
              <p>Taco ipsum, beef chicken steak pork tacos erryday.</p>
            </li>
            <li>
              <BiCheck className='service__icon-list' />
              <p>Taco ipsum, beef chicken steak pork tacos erryday.</p>
            </li>
            <li>
              <BiCheck className='service__icon-list' />
              <p>Taco ipsum, beef chicken steak pork tacos erryday.</p>
            </li>
            <li>
              <BiCheck className='service__icon-list' />
              <p>Taco ipsum, beef chicken steak pork tacos erryday.</p>
            </li>
            <li>
              <BiCheck className='service__icon-list' />
              <p>Taco ipsum, beef chicken steak pork tacos erryday.</p>
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
              <BiCheck className='service__icon-list' />
              <p>Taco ipsum, beef chicken steak pork tacos erryday.</p>
            </li>
            <li>
              <BiCheck className='service__icon-list' />
              <p>Taco ipsum, beef chicken steak pork tacos erryday.</p>
            </li>
            <li>
              <BiCheck className='service__icon-list' />
              <p>Taco ipsum, beef chicken steak pork tacos erryday.</p>
            </li>
            <li>
              <BiCheck className='service__icon-list' />
              <p>Taco ipsum, beef chicken steak pork tacos erryday.</p>
            </li>
            <li>
              <BiCheck className='service__icon-list' />
              <p>Taco ipsum, beef chicken steak pork tacos erryday.</p>
            </li>
          </ul>
        </article>
        {/* END OF Automation */}
      </div>
    </section>
  )
}

export default Service