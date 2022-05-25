import React from 'react'
import './about.css'
import llamaNFT from '../../assets/llama-nft.png'
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

      <h5>[ our cargo ]</h5>
      <h2>About Us</h2>
      <br></br>
      <br></br>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={llamaNFT} alt="About" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsFillAwardFill className='about__icon'/>
              <h5>STANDARD</h5>
              <small>Uniquely Minted</small>
            </article>

            <article className='about__card'>
              <MdDeveloperMode className='about__icon'/>
              <h5>made</h5>
              <small>Web.3 + Layer.2</small>
            </article>

            <article className='about__card'>
              <FaRobot className='about__icon'/>
              <h5>NFTs</h5>
              <small>Veteran Made</small>
            </article>
          </div>

          <p>
          Welcome to STANDARDmade! I'm 8Kit, Crypto Software Automation Engineer by day and Creator, Web3Dev, Designer by night. 
          I started this solo-project way back in 2019, formerally as Standard Clothing Company, LLC. As a Army Airborne Veteran, my goal at the time was simple: 
          pay tribute to the amazing Healthcare, Military, and First Responder service professionals by repurposing their duty worn uniforms 
          into unique patches and accents on standard clothing items. 
          <br></br>
          <br></br>
          Honoring amazing people and retelling their stories in unconventional ways came naturally, 
          but navigating the choppy waters of the volitile retail market presented many unforseen and costly challenges. So, I've docked that old boat at the edge of the 
          retail seas and decided to take a rocket ship straght into the future of the Web3 galaxy and NFTs! 
          <br></br>
          <br></br>
          This has very much felt like a destiny project - perfectly aligning my day/night passions into this STANDARDmade universe. Designs, mock-ups, uniforms, 
          and stories from previous retail endevors have provided an ironic launchpad for transforming these mediums into digital assets. Each NFT draws 
          inspiration from real service professionals, the uniforms they wore, and the stories they tell. Every minted STANDARDmade NFT will unlock additional content - 
          including who inspired the design and bonus content from their time in service. 
          <br></br>
          <br></br>
          <small>**In some rarity cases, minted NFTs can include a premium layered effect utilizing the service member's duty-worn uniform - photos of the real service uniforms are 
          digitally converted in Adobe Illustrator® and used as effect layers that include special rare properties.</small>   
          </p>

          <a href='#contact' className='btn btn-primary'>Learn More</a>
        </div>
      </div>
    </section>
  )
}

export default About