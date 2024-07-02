import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsGithub} from 'react-icons/bs'
import {FiPhoneCall} from 'react-icons/fi'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_madeC137', 'template_madeC137', form.current, 'wlDEKQOlCp3RYKyi2')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
    e.target.reset()
  }

  return (
    <section id='contact'>
      <h2>Contact</h2>
      <h5>[ Reach Out ]</h5>
      <br></br>
      <br></br>

      <div className="container contact__container">
        <div className="contact__options">
          <artice className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>dev@kitt.llc</h5>
            <a href="mailto:dev@kitt.llc" rel="noreferrer" target="_blank">Send a message</a>
          </artice>
          <artice className="contact__option">
            <BsGithub className='contact__option-icon' />
            <h4>Github</h4>
            <h5>@kitt-llc</h5>
            <a href="https://github.com/kitt-llc" rel="noreferrer" target="_blank">ReadMe.md</a>
          </artice>
          <artice className="contact__option">
            <FiPhoneCall className='contact__option-icon' />
            <h4>Mobile</h4>
            <h5>+404-DONT-CALL</h5>
            <a href="https://api.whatsapp.com/send?phone+1404123456" rel="noreferrer" target="_blank">Send a message</a>
          </artice>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name ="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact