import React from 'react'
import './team.css'
import AVTR1 from '../../assets/1kitt.png'
import AVTR2 from '../../assets/2kitt.png'
import AVTR3 from '../../assets/3kitt.png'
import AVTR4 from '../../assets/4kitt.png'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'QUALITY ASSURANCE',
    title: '🌰🌰🐿️',
    review: 'With extensive experience as a Lead QA Engineer, I have a proven track record of designing and executing comprehensive test plans for various platforms including web, mobile, and desktop applications. My expertise includes automating test processes using tools like Cypress and integrating them into CI/CD workflows to ensure high-quality releases.'
  },
  {
    avatar: AVTR2,
    name: 'SOFTWARE DEVELOPMENT',
    title: '🍑🍑🐇',
    review: 'As a versatile developer, I have successfully led development projects that span multiple domains, including cloud architecture, APIs, and advanced AI. My proficiency in languages like JavaScript and Python, along with my ability to adapt to different tooling and methodologies, has enabled me to deliver robust and scalable solutions in dynamic environments.'
  },
  {
    avatar: AVTR3,
    name: 'SYSTEMS and GRAPHIC DESIGN',
    title: '🌮🌮🐈',
    review: 'Specializing in front-end development and design, I bring a keen eye for detail and a deep understanding of user experience principles. My work involves creating intuitive and accessible interfaces that enhance user engagement and satisfaction, leveraging modern frameworks and tools to deliver seamless digital experiences.'
  },
  {
    avatar: AVTR4,
    name: 'MANAGEMENT thru LEADERSHIP',
    title: '🍩🍩🦦',
    review: 'With a strong background in management, I have led teams of QA professionals to deliver high-quality software products. My leadership skills are complemented by my ability to streamline workflows, implement effective testing strategies, and ensure that projects meet their goals on time and within budget. I excel in fostering collaborative environments and driving continuous improvement.'
  }
]

const Team = () => {
  return (
    <section id='team'>
      <h2>Highlights</h2>
      <h5>[ Core Kitt ]</h5>
      <br></br>
      <br></br>

      <Swiper className="container team__container"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {
          data.map(({avatar, title, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="kit">
              <div className="client__avatar">
                <img src={avatar} alt="team" />
              </div>
              <h5 className='cleint__title'>{title}</h5>
              <h3 className='cleint__name'>{name}</h3>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Team